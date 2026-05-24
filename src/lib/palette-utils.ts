import { Palette, PaletteCategory, PlotType } from "./types";
import { palettes } from "./palettes";
import { hexToRgb as parseHexColor, oklabDistance, rgbToOklab } from "./art2pal/color";

export interface PaletteSimilarityScore {
  total: number;
  metadata: number;
  color: number;
  sharedTags: number;
  sharedPlotTypes: number;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function generatePythonCode(colors: string[]): string {
  return `# Python / Matplotlib
palette = [${colors.map(c => `"${c}"`).join(", ")}]

# Use in matplotlib
import matplotlib.pyplot as plt
plt.rcParams['axes.prop_cycle'] = plt.cycler(color=palette)`;
}

export function generateRCode(colors: string[]): string {
  return `# R / ggplot2
palette <- c(${colors.map(c => `"${c}"`).join(", ")})

# Use in ggplot2
library(ggplot2)
scale_color_manual(values = palette)
scale_fill_manual(values = palette)`;
}

export function generateScanpyCode(colors: string[], paletteName: string): string {
  return `# Scanpy (Python single-cell)
import scanpy as sc

# Set colors for a categorical variable
adata.uns["${paletteName.toLowerCase().replace(/\s+/g, '_')}_colors"] = [${colors.map(c => `"${c}"`).join(", ")}]

# Use in plotting
sc.pl.umap(adata, color="cell_type")`;
}

export function generateSeuratCode(colors: string[]): string {
  return `# Seurat (R single-cell)
library(Seurat)

# Use in DimPlot
DimPlot(seurat_obj, cols = c(${colors.map(c => `"${c}"`).join(", ")}))

# Use in FeaturePlot or other plots
my_colors <- c(${colors.map(c => `"${c}"`).join(", ")})`;
}

export function generateGraphPadCode(colors: string[]): string {
  return colors.join("\n");
}

export function generateHexList(colors: string[]): string {
  return colors.join(", ");
}

export function filterPalettes(
  searchQuery: string,
  category: PaletteCategory | "all",
  plotType: PlotType | "all",
  colorblindOnly: boolean,
  colorCount: string
): Palette[] {
  let filtered = [...palettes];

  // Search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query)) ||
        p.recommendedFor.some(plotType => plotType.toLowerCase().includes(query))
    );
  }

  // Category filter
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Plot type filter
  if (plotType !== "all") {
    filtered = filtered.filter(p => p.recommendedFor.includes(plotType));
  }

  // Colorblind filter
  if (colorblindOnly) {
    filtered = filtered.filter(p => p.colorblindSafe);
  }

  // Color count filter
  if (colorCount !== "all") {
    filtered = filtered.filter(p => {
      const count = p.colors.length;
      if (p.category === "categorical") {
        switch (colorCount) {
          case "2-4":
            return count >= 2;
          case "5-8":
            return count >= 5;
          case "9-12":
            return count >= 9;
          case "12+":
            return count >= 12;
          default:
            return true;
        }
      }

      switch (colorCount) {
        case "2-4":
          return count >= 2 && count <= 4;
        case "5-8":
          return count >= 5 && count <= 8;
        case "9-12":
          return count >= 9 && count <= 12;
        case "12+":
          return count >= 12;
        default:
          return true;
      }
    });
  }

  return filtered;
}

export function getRandomPalette(): Palette {
  return palettes[Math.floor(Math.random() * palettes.length)];
}

export function getPaletteSimilarityScore(target: Palette, candidate: Palette): PaletteSimilarityScore {
  const sharedTags = candidate.tags.filter(tag => target.tags.includes(tag)).length;
  const sharedPlotTypes = candidate.recommendedFor.filter(plotType => target.recommendedFor.includes(plotType)).length;
  const metadata =
    (candidate.category === target.category ? 3 : 0) +
    (candidate.colorblindSafe === target.colorblindSafe ? 1 : 0) +
    sharedTags * 2 +
    sharedPlotTypes * 2;
  const color = getPaletteColorSimilarity(target.colors, candidate.colors);

  return {
    total: metadata + color * 5,
    metadata,
    color,
    sharedTags,
    sharedPlotTypes,
  };
}

export function getSimilarPalettes(palette: Palette, limit: number = 4): Palette[] {
  const similar = palettes
    .filter(p => p.id !== palette.id)
    .map(p => {
      const score = getPaletteSimilarityScore(palette, p);
      return { palette: p, score };
    })
    .sort(
      (a, b) =>
        b.score.total - a.score.total ||
        b.score.metadata - a.score.metadata ||
        b.score.color - a.score.color ||
        a.palette.name.localeCompare(b.palette.name)
    )
    .slice(0, limit)
    .map(item => item.palette);

  return similar;
}

function getPaletteColorSimilarity(first: string[], second: string[]): number {
  const firstLabs = first.map(hexToOklabOrNull).filter((color): color is NonNullable<typeof color> => color !== null);
  const secondLabs = second.map(hexToOklabOrNull).filter((color): color is NonNullable<typeof color> => color !== null);

  if (firstLabs.length === 0 || secondLabs.length === 0) {
    return 0;
  }

  const distance = (averageNearestDistance(firstLabs, secondLabs) + averageNearestDistance(secondLabs, firstLabs)) / 2;
  return Math.max(0, 1 - distance / 0.45);
}

function averageNearestDistance(
  source: ReturnType<typeof rgbToOklab>[],
  target: ReturnType<typeof rgbToOklab>[]
): number {
  const total = source.reduce((sum, color) => {
    const nearest = Math.min(...target.map(candidate => oklabDistance(color, candidate)));
    return sum + nearest;
  }, 0);

  return total / source.length;
}

function hexToOklabOrNull(hex: string): ReturnType<typeof rgbToOklab> | null {
  try {
    return rgbToOklab(parseHexColor(hex));
  } catch {
    return null;
  }
}
