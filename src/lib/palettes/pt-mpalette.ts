import type { PaletteSource } from "../types";

const palette = {
  name: "mpalette",
  description: "Qualitative palette “mpalette” from the awtools collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#017A4A", "#FFCE4E", "#3D98D3", "#FF363C", "#7559A2", "#794924", "#8CDB5E", "#D6D6D6", "#FB8C00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "awtools"],
  background: "white",
  source: "awtools (via paletteer)"
} satisfies PaletteSource;

export default palette;
