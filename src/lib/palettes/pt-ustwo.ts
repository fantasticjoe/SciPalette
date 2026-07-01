import type { PaletteSource } from "../types";

const palette = {
  name: "ustwo",
  description: "Qualitative palette “ustwo” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D7433B", "#F06A63", "#FF8E5E", "#FFCC3D", "#95CAA6", "#008D98"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
