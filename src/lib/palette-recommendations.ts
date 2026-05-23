import { palettes } from "./palettes";
import type { Palette, PaletteCategory, PlotType } from "./types";

export type RecommendationColorCount = "all" | "2-4" | "5-8" | "9-12" | "12+";

export interface PaletteRecommendationInput {
  plotType: PlotType | "all";
  category: PaletteCategory | "all";
  colorCount: RecommendationColorCount;
  colorblindOnly: boolean;
  background: Palette["background"] | "any";
  intent: string;
}

export interface PaletteRecommendation {
  palette: Palette;
  score: number;
  reasons: string[];
}

export const recommendationPresets: Record<string, PaletteRecommendationInput> = {
  singleCellClusters: {
    plotType: "umap",
    category: "categorical",
    colorCount: "9-12",
    colorblindOnly: true,
    background: "white",
    intent: "single-cell cluster annotation",
  },
  expressionHeatmap: {
    plotType: "heatmap",
    category: "sequential",
    colorCount: "9-12",
    colorblindOnly: true,
    background: "white",
    intent: "gene expression heatmap",
  },
  clinicalGroups: {
    plotType: "bar",
    category: "categorical",
    colorCount: "2-4",
    colorblindOnly: true,
    background: "white",
    intent: "clinical trial groups",
  },
};

const plotLabels: Record<PlotType, string> = {
  bar: "bar plots",
  line: "line plots",
  scatter: "scatter plots",
  umap: "UMAP",
  heatmap: "heatmaps",
  volcano: "volcano plots",
  boxplot: "box plots",
};

const intentKeywordWeights: Array<{ keywords: string[]; tags: string[]; plots: PlotType[]; categories: PaletteCategory[] }> = [
  {
    keywords: ["single-cell", "single cell", "cell", "cluster", "annotation", "atlas"],
    tags: ["single-cell", "cell-types", "categorical"],
    plots: ["umap", "scatter"],
    categories: ["categorical"],
  },
  {
    keywords: ["expression", "gene", "heatmap", "density", "continuous"],
    tags: ["sequential", "continuous", "perceptually-uniform"],
    plots: ["heatmap", "scatter"],
    categories: ["sequential", "heatmap"],
  },
  {
    keywords: ["fold", "logfc", "correlation", "z-score", "effect", "volcano"],
    tags: ["diverging", "volcano"],
    plots: ["heatmap", "volcano"],
    categories: ["diverging"],
  },
  {
    keywords: ["clinical", "trial", "group", "treatment", "control"],
    tags: ["clinical", "publication", "categorical"],
    plots: ["bar", "line", "boxplot"],
    categories: ["categorical"],
  },
];

export function getPaletteRecommendations(input: PaletteRecommendationInput, limit: number = 4): PaletteRecommendation[] {
  const candidates = input.colorblindOnly ? palettes.filter((palette) => palette.colorblindSafe) : palettes;

  return candidates
    .map((palette) => scorePalette(palette, input))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.palette.name.localeCompare(b.palette.name))
    .slice(0, limit);
}

function scorePalette(palette: Palette, input: PaletteRecommendationInput): PaletteRecommendation {
  let score = 0;
  const reasons: string[] = [];

  if (input.plotType !== "all" && palette.recommendedFor.includes(input.plotType)) {
    score += 26;
    reasons.push(`Recommended for ${plotLabels[input.plotType]}`);
  }

  if (input.category !== "all" && palette.category === input.category) {
    score += 20;
    reasons.push(`Uses a ${input.category} palette structure`);
  }

  if (input.colorblindOnly && palette.colorblindSafe) {
    score += 18;
    reasons.push(`Colorblind score ${palette.colorblindScore}/100`);
  } else if (input.colorblindOnly) {
    score -= 12;
  }

  if (input.background !== "any" && palette.background === input.background) {
    score += 10;
    reasons.push(`Designed for ${input.background} background figures`);
  }

  if (matchesColorCount(palette.colors.length, input.colorCount)) {
    score += 10;
    if (input.colorCount !== "all") {
      reasons.push(`Fits the requested ${input.colorCount} color range`);
    }
  }

  const intentScore = scoreIntent(palette, input.intent, reasons);
  score += intentScore;

  if (!input.colorblindOnly && palette.colorblindSafe) {
    score += 4;
  }

  if (reasons.length === 0) {
    reasons.push("Broad scientific plotting fit");
  }

  return {
    palette,
    score,
    reasons: reasons.slice(0, 3),
  };
}

function scoreIntent(palette: Palette, intent: string, reasons: string[]): number {
  const normalized = intent.trim().toLowerCase();
  if (!normalized) return 0;

  let score = 0;
  const searchable = `${palette.name} ${palette.description} ${palette.tags.join(" ")} ${palette.recommendedFor.join(" ")}`.toLowerCase();

  for (const word of normalized.split(/[^a-z0-9-]+/).filter(Boolean)) {
    if (word.length > 2 && searchable.includes(word)) {
      score += 2;
    }
  }

  for (const signal of intentKeywordWeights) {
    if (!signal.keywords.some((keyword) => normalized.includes(keyword))) continue;

    const tagMatches = palette.tags.filter((tag) => signal.tags.includes(tag)).length;
    const plotMatches = palette.recommendedFor.filter((plot) => signal.plots.includes(plot)).length;
    const categoryMatch = signal.categories.includes(palette.category);
    const signalScore = tagMatches * 5 + plotMatches * 4 + (categoryMatch ? 6 : 0);

    if (signalScore > 0) {
      score += signalScore;
      reasons.push("Matches the described research use case");
    }
  }

  return score;
}

function matchesColorCount(count: number, range: RecommendationColorCount): boolean {
  switch (range) {
    case "2-4":
      return count >= 2 && count <= 4;
    case "5-8":
      return count >= 5 && count <= 8;
    case "9-12":
      return count >= 9 && count <= 12;
    case "12+":
      return count > 12;
    case "all":
      return true;
  }
}
