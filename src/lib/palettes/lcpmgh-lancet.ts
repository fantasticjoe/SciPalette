import type { PaletteSource } from "../types";

const palette = {
  name: "Lancet",
  description: "Discrete qualitative palette in the Lancet journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#00468B", "#ED0000", "#42B540", "#0099B4", "#925E9F", "#FDAF91", "#AD002A", "#ADB6B6", "#1B1919"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
