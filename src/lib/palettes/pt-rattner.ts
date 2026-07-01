import type { PaletteSource } from "../types";

const palette = {
  name: "Rattner",
  description: "Qualitative palette “Rattner” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DE8E69", "#F1BE99", "#C1BD38", "#7A9132", "#4C849A", "#184363", "#5D5686", "#A39FC9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
