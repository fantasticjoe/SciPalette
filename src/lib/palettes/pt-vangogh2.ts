import type { PaletteSource } from "../types";

const palette = {
  name: "VanGogh2",
  description: "Qualitative palette “VanGogh2” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#BD3106", "#D9700E", "#E9A00E", "#EEBE04", "#5B7314", "#C3D6CE", "#89A6BB", "#454B87"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
