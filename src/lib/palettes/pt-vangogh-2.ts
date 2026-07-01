import type { PaletteSource } from "../types";

const palette = {
  name: "VanGogh",
  description: "Qualitative palette “VanGogh” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C3A016", "#C3D878", "#58A787", "#8EBACD", "#246893", "#163274", "#0C1F4B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
