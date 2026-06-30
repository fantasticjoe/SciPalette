import type { PaletteSource } from "../types";

const palette = {
  name: "Bootstrap",
  description: "Bootstrap discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#CEE1FF", "#A3C8FD", "#78AEFE", "#4C94FC", "#237AFF", "#0363EA", "#0A50B8", "#073D8C", "#04295F", "#021533"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
