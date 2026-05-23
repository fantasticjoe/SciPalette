import type { GeneratedPalette } from "./palette";

export type PaletteExportFormat = "hex" | "json" | "css" | "python" | "r" | "scipalette-json";

export const paletteExportFormats: { value: PaletteExportFormat; label: string }[] = [
  { value: "hex", label: "HEX list" },
  { value: "json", label: "JSON" },
  { value: "css", label: "CSS variables" },
  { value: "python", label: "Python" },
  { value: "r", label: "R ggplot2" },
  { value: "scipalette-json", label: "SciPalette contribution JSON" },
];

type PaletteExportContext = Pick<GeneratedPalette, "kind" | "name" | "description" | "usage">;

function contributionDefaults(context?: PaletteExportContext): {
  category: "categorical" | "sequential" | "diverging" | "heatmap";
  recommendedFor: string[];
  tags: string[];
} {
  switch (context?.kind) {
    case "sequential":
      return {
        category: "sequential",
        recommendedFor: ["heatmap", "scatter"],
        tags: ["art2pal", "sequential", "continuous"],
      };
    case "diverging":
      return {
        category: "diverging",
        recommendedFor: ["heatmap"],
        tags: ["art2pal", "diverging", "centered"],
      };
    case "neutral":
      return {
        category: "categorical",
        recommendedFor: ["bar", "line"],
        tags: ["art2pal", "neutral", "annotation"],
      };
    case "categorical":
    default:
      return {
        category: "categorical",
        recommendedFor: ["umap", "scatter"],
        tags: ["art2pal", context?.kind ?? "generated"],
      };
  }
}

function formatSciPaletteContributionJson(colors: string[], context?: PaletteExportContext): string {
  const defaults = contributionDefaults(context);

  return JSON.stringify(
    {
      name: "Your Palette Name",
      description: context?.description ?? "Describe where this palette works best.",
      category: defaults.category,
      colors,
      recommendedFor: defaults.recommendedFor,
      tags: defaults.tags,
      background: "white",
      source: "Generated locally with Art2Pal",
    },
    null,
    2
  );
}

export function formatPaletteExport(colors: string[], format: PaletteExportFormat, context?: PaletteExportContext): string {
  switch (format) {
    case "json":
      return JSON.stringify(colors, null, 2);
    case "scipalette-json":
      return formatSciPaletteContributionJson(colors, context);
    case "css":
      return [":root {", ...colors.map((color, index) => `  --color-${index + 1}: ${color};`), "}"].join("\n");
    case "python":
      return `palette = [${colors.map((color) => `"${color}"`).join(", ")}]`;
    case "r":
      const rVector = `c(${colors.map((color) => `"${color}"`).join(", ")})`;
      return [
        `scale_color_manual(values = ${rVector})`,
        `scale_fill_manual(values = ${rVector})`,
      ].join("\n");
    case "hex":
    default:
      return colors.join(", ");
  }
}
