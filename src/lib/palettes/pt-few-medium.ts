import type { PaletteSource } from "../types";

const palette = {
  name: "few Medium",
  description: "Qualitative palette “few Medium” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4D4D4D", "#5DA5DA", "#FAA43A", "#60BD68", "#F17CB0", "#B2912F", "#B276B2", "#DECF3F", "#F15854"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
