import type { PaletteSource } from "../types";

const palette = {
  name: "Indigo Red 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#4626F6", "#6C0E0F", "#7B1415", "#8479F9", "#9CAD8B", "#CB181C", "#CE403F", "#D3D0FD", "#DB8382", "#DFE8D5", "#EBCEC0", "#ECD2D3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
