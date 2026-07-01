import type { PaletteSource } from "../types";

const palette = {
  name: "qMSORdPu",
  description: "Qualitative palette “qMSORdPu” from the Redmonder collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D8D9DC", "#454551", "#E32D91", "#C830CC", "#4EA6DC", "#4775E7", "#8971E1", "#D54773"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
