import type { PaletteSource } from "../types";

const palette = {
  name: "Neon",
  description: "Qualitative palette “Neon” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF9062", "#FD6598", "#CB64C0", "#3294DD", "#75FB8A", "#D0EB60"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
