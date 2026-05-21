import { Palette, PaletteCategory } from "./types";

export const palettes: Palette[] = [
  {
    id: "nature-muted-8",
    name: "Nature Muted 8",
    description: "Soft, professional colors inspired by high-impact journals. Perfect for multi-group comparisons in publication figures.",
    category: "categorical",
    colors: ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F", "#EDC948", "#B07AA1", "#FF9DA7"],
    recommendedFor: ["bar", "line", "scatter", "boxplot"],
    tags: ["publication", "professional", "multi-group"],
    colorblindSafe: true,
    background: "white",
    source: "Inspired by scientific visualization best practices"
  },
  {
    id: "cell-atlas-12",
    name: "Cell Atlas 12",
    description: "Vibrant palette designed for single-cell clustering and cell type annotation. High contrast for distinguishing many clusters.",
    category: "categorical",
    colors: ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD", "#8C564B", "#E377C2", "#7F7F7F", "#BCBD22", "#17BECF", "#AEC7E8", "#FFBB78"],
    recommendedFor: ["umap", "scatter"],
    tags: ["single-cell", "clustering", "cell-types", "scRNA-seq"],
    colorblindSafe: false,
    background: "white",
    source: "Optimized for single-cell analysis"
  },
  {
    id: "immunology-cell-types",
    name: "Immunology Cell Types",
    description: "Carefully selected colors for immune cell populations. Each color represents traditional immunology color conventions.",
    category: "categorical",
    colors: ["#CD4F39", "#6C8EBF", "#82B366", "#D6B656", "#9673A6", "#E07A5F"],
    recommendedFor: ["bar", "scatter", "umap"],
    tags: ["immunology", "cell-types", "flow-cytometry"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "clinical-trial-4",
    name: "Clinical Trial 4",
    description: "Clean, distinguishable colors for clinical trial groups. Designed for clarity in medical publications.",
    category: "categorical",
    colors: ["#003f5c", "#bc5090", "#ffa600", "#58508d"],
    recommendedFor: ["bar", "line", "boxplot"],
    tags: ["clinical", "medical", "trial-groups"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "colorblind-safe-8",
    name: "Colorblind Safe 8",
    description: "Scientifically validated palette safe for all types of color vision deficiency. Recommended for maximum accessibility.",
    category: "categorical",
    colors: ["#0173B2", "#DE8F05", "#029E73", "#CC78BC", "#CA9161", "#949494", "#ECE133", "#56B4E9"],
    recommendedFor: ["bar", "line", "scatter", "boxplot"],
    tags: ["colorblind-safe", "accessible", "universal"],
    colorblindSafe: true,
    background: "white",
    source: "Based on colorblind-safe color theory"
  },
  {
    id: "okabe-ito",
    name: "Okabe-Ito",
    description: "The gold standard for colorblind-friendly scientific figures. Widely recommended by Nature and Science journals.",
    category: "categorical",
    colors: ["#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7", "#000000"],
    recommendedFor: ["bar", "line", "scatter", "boxplot"],
    tags: ["colorblind-safe", "standard", "publication"],
    colorblindSafe: true,
    background: "white",
    source: "Okabe & Ito (2008)"
  },
  {
    id: "tableau-scientific-10",
    name: "Tableau Scientific 10",
    description: "Balanced palette for scientific data visualization. Good contrast and professional appearance.",
    category: "categorical",
    colors: ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F", "#EDC948", "#B07AA1", "#FF9DA7", "#9C755F", "#BAB0AC"],
    recommendedFor: ["bar", "line", "scatter"],
    tags: ["balanced", "professional"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "soft-pastel-6",
    name: "Soft Pastel 6",
    description: "Gentle, muted colors for elegant figures. Works well for presentations and posters.",
    category: "categorical",
    colors: ["#A8DADC", "#F1FAEE", "#E63946", "#F4A261", "#2A9D8F", "#264653"],
    recommendedFor: ["bar", "scatter"],
    tags: ["pastel", "presentation", "poster"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "high-contrast-6",
    name: "High Contrast 6",
    description: "Bold, saturated colors for maximum visibility. Ideal for presentations and posters viewed from distance.",
    category: "categorical",
    colors: ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FF00FF", "#00FFFF"],
    recommendedFor: ["bar", "scatter"],
    tags: ["high-contrast", "presentation", "bold"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "volcano-classic-3",
    name: "Volcano Classic 3",
    description: "Traditional three-color scheme for volcano plots. Gray for non-significant, red for upregulated, blue for downregulated.",
    category: "categorical",
    colors: ["#999999", "#E64B35", "#4DBBD5"],
    recommendedFor: ["volcano", "scatter"],
    tags: ["volcano-plot", "differential-expression", "genomics"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "blue-red-diverging",
    name: "Blue-Red Diverging",
    description: "Classic diverging palette for heatmaps and correlation matrices. Blue for negative, red for positive values.",
    category: "diverging",
    colors: ["#053061", "#2166AC", "#4393C3", "#92C5DE", "#D1E5F0", "#F7F7F7", "#FDDBC7", "#F4A582", "#D6604D", "#B2182B", "#67001F"],
    recommendedFor: ["heatmap"],
    tags: ["heatmap", "correlation", "diverging"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "purple-orange-diverging",
    name: "Purple-Orange Diverging",
    description: "Colorblind-friendly diverging palette. Excellent for showing positive and negative changes.",
    category: "diverging",
    colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#F97B72"],
    recommendedFor: ["heatmap", "volcano"],
    tags: ["diverging", "colorblind-safe", "fold-change"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "viridis-like",
    name: "Viridis-like",
    description: "Perceptually uniform sequential palette. Excellent for continuous data and maintains clarity in grayscale.",
    category: "sequential",
    colors: ["#440154", "#482878", "#3E4A89", "#31688E", "#26828E", "#1F9E89", "#35B779", "#6DCD59", "#B4DE2C", "#FDE724"],
    recommendedFor: ["heatmap", "scatter"],
    tags: ["sequential", "perceptually-uniform", "continuous"],
    colorblindSafe: true,
    background: "white",
    source: "Inspired by matplotlib viridis"
  },
  {
    id: "plasma-like",
    name: "Plasma-like",
    description: "Vibrant sequential palette from dark purple to bright yellow. High contrast for highlighting patterns.",
    category: "sequential",
    colors: ["#0D0887", "#46039F", "#7201A8", "#9C179E", "#BD3786", "#D8576B", "#ED7953", "#FB9F3A", "#FDCA26", "#F0F921"],
    recommendedFor: ["heatmap", "scatter"],
    tags: ["sequential", "vibrant", "high-contrast"],
    colorblindSafe: true,
    background: "white",
    source: "Inspired by matplotlib plasma"
  },
  {
    id: "cividis-like",
    name: "Cividis-like",
    description: "Optimized for colorblind readers. Blue to yellow sequential palette with excellent accessibility.",
    category: "sequential",
    colors: ["#00224E", "#123570", "#3B496C", "#575D6D", "#707173", "#8A8678", "#A49B75", "#C1B16B", "#E1C75B", "#FFDF3F"],
    recommendedFor: ["heatmap", "scatter"],
    tags: ["sequential", "colorblind-safe", "accessible"],
    colorblindSafe: true,
    background: "white",
    source: "Inspired by matplotlib cividis"
  },
  {
    id: "heatmap-blue-white-red",
    name: "Heatmap Blue-White-Red",
    description: "Standard heatmap gradient for gene expression data. White center for zero/baseline values.",
    category: "heatmap",
    colors: ["#0000FF", "#4040FF", "#8080FF", "#C0C0FF", "#FFFFFF", "#FFC0C0", "#FF8080", "#FF4040", "#FF0000"],
    recommendedFor: ["heatmap"],
    tags: ["heatmap", "gene-expression", "z-score"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "heatmap-yellow-red",
    name: "Heatmap Yellow-Red",
    description: "Sequential heatmap gradient from light yellow to dark red. Ideal for intensity data and p-values.",
    category: "heatmap",
    colors: ["#FFFFCC", "#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
    recommendedFor: ["heatmap"],
    tags: ["heatmap", "intensity", "p-value"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "single-cell-cluster-20",
    name: "Single-cell Cluster 20",
    description: "Extended palette for large-scale single-cell datasets with many clusters. Maximum distinguishability.",
    category: "categorical",
    colors: ["#E41A1C", "#377EB8", "#4DAF4A", "#984EA3", "#FF7F00", "#FFFF33", "#A65628", "#F781BF", "#999999", "#66C2A5", "#FC8D62", "#8DA0CB", "#E78AC3", "#A6D854", "#FFD92F", "#E5C494", "#B3B3B3", "#8DD3C7", "#BEBADA", "#FB8072"],
    recommendedFor: ["umap", "scatter"],
    tags: ["single-cell", "many-clusters", "scRNA-seq"],
    colorblindSafe: false,
    background: "white"
  },
  {
    id: "t-cell-states",
    name: "T Cell States",
    description: "Specialized palette for T cell differentiation states. Colors progress from naive to effector to memory.",
    category: "categorical",
    colors: ["#9ECAE1", "#4292C6", "#08519C", "#54278F", "#6A51A3", "#807DBA"],
    recommendedFor: ["bar", "umap", "scatter"],
    tags: ["immunology", "T-cells", "differentiation"],
    colorblindSafe: true,
    background: "white"
  },
  {
    id: "tumor-microenvironment",
    name: "Tumor Microenvironment",
    description: "Colors for tumor microenvironment cell types. Includes tumor, immune, and stromal populations.",
    category: "categorical",
    colors: ["#D62728", "#FF7F0E", "#2CA02C", "#1F77B4", "#9467BD", "#8C564B", "#E377C2", "#BCBD22"],
    recommendedFor: ["umap", "bar", "scatter"],
    tags: ["cancer", "tumor", "microenvironment", "immune"],
    colorblindSafe: false,
    background: "white"
  }
];

export function getPaletteById(id: string): Palette | undefined {
  return palettes.find(p => p.id === id);
}

export function getPalettesByCategory(category: PaletteCategory): Palette[] {
  return palettes.filter(p => p.category === category);
}

export function getPalettesByTag(tag: string): Palette[] {
  return palettes.filter(p => p.tags.includes(tag));
}

export function getColorblindSafePalettes(): Palette[] {
  return palettes.filter(p => p.colorblindSafe);
}
