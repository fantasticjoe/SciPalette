import type { PaletteCategory, PlotType } from "./types";

export const categoryOptions: { value: PaletteCategory | "all"; label: string }[] = [
  { value: "all", label: "All categories" },
  { value: "categorical", label: "Categorical" },
  { value: "sequential", label: "Sequential" },
  { value: "diverging", label: "Diverging" },
  { value: "heatmap", label: "Heatmap" },
];

export const plotTypeOptions: { value: PlotType | "all"; label: string }[] = [
  { value: "all", label: "All plots" },
  { value: "bar", label: "Bar plot" },
  { value: "line", label: "Line plot" },
  { value: "scatter", label: "Scatter plot" },
  { value: "umap", label: "UMAP" },
  { value: "heatmap", label: "Heatmap" },
  { value: "volcano", label: "Volcano plot" },
  { value: "boxplot", label: "Box plot" },
];

export const colorCountOptions = [
  { value: "all", label: "All counts" },
  { value: "2-4", label: "2-4 colors" },
  { value: "5-8", label: "5-8 colors" },
  { value: "9-12", label: "9-12 colors" },
  { value: "12+", label: "12+ colors" },
] as const;

export type ColorCountOption = (typeof colorCountOptions)[number]["value"];
