import type { PaletteSource } from "../types";

const palette = {
  name: "Lupi",
  description: "Qualitative palette “Lupi” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#61BEA4", "#B6E7E0", "#AA3F5D", "#DAA5AC", "#98A54F", "#2E92A2", "#FFB651", "#D85A44"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
