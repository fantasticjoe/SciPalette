import { Palette, PaletteCategory, PlotType } from "./types";
import { palettes } from "./palettes";

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
        p.tags.some(tag => tag.toLowerCase().includes(query))
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
      switch (colorCount) {
        case "2-4":
          return count >= 2 && count <= 4;
        case "5-8":
          return count >= 5 && count <= 8;
        case "9-12":
          return count >= 9 && count <= 12;
        case "12+":
          return count > 12;
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

export function getSimilarPalettes(palette: Palette, limit: number = 4): Palette[] {
  // Find palettes with same category or overlapping tags
  const similar = palettes
    .filter(p => p.id !== palette.id)
    .map(p => {
      let score = 0;
      if (p.category === palette.category) score += 3;
      if (p.colorblindSafe === palette.colorblindSafe) score += 1;
      const commonTags = p.tags.filter(tag => palette.tags.includes(tag)).length;
      score += commonTags * 2;
      return { palette: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.palette);

  return similar;
}
