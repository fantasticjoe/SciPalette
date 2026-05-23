export type PaletteCategory = "categorical" | "sequential" | "diverging" | "heatmap";

export type PlotType =
  | "bar"
  | "line"
  | "scatter"
  | "umap"
  | "heatmap"
  | "volcano"
  | "boxplot";

export type Palette = {
  id: string;
  name: string;
  description: string;
  category: PaletteCategory;
  colors: string[];
  recommendedFor: PlotType[];
  tags: string[];
  colorblindSafe: boolean;
  background: "white" | "light" | "dark";
  source?: string;
};

export type PaletteSource = Omit<Palette, "id">;
