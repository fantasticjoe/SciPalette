import type { PaletteSource } from "../types";

const palette = {
  name: "OKeeffe",
  description: "Qualitative palette “OKeeffe” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F3D567", "#EE9B43", "#E74B47", "#B80422", "#172767", "#19798B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
