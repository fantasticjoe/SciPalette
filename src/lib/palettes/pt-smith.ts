import type { PaletteSource } from "../types";

const palette = {
  name: "Smith",
  description: "Qualitative palette “Smith” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EF7923", "#75BCA9", "#7B89BB", "#E9DE97", "#2A2E38"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
