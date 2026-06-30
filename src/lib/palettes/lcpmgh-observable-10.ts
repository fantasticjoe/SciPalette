import type { PaletteSource } from "../types";

const palette = {
  name: "Observable 10",
  description: "Observable 10 discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#4269D0", "#EFB118", "#FF725C", "#6CC5B0", "#3CA951", "#FF8AB7", "#A463F2", "#97BBF5", "#9C6B4E", "#9498A0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
