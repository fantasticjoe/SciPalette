import type { PaletteSource } from "../types";

const palette = {
  name: "vermeer",
  description: "Qualitative palette “vermeer” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0A030A", "#4A5CA5", "#CDB87E", "#896134", "#70211B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
