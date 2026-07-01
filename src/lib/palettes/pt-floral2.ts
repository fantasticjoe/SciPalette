import type { PaletteSource } from "../types";

const palette = {
  name: "floral2",
  description: "Qualitative palette “floral2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7CA0D4", "#A48AD3", "#E995EB", "#BADE86", "#2B8AAE", "#624894", "#DE757B", "#8BA56F", "#073F80", "#40007F", "#80003F", "#0A522A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
