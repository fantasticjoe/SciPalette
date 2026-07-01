import type { PaletteSource } from "../types";

const palette = {
  name: "Homer1",
  description: "Qualitative palette “Homer1” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#551F00", "#A62F00", "#DF7700", "#F5B642", "#FFF179", "#C3F4F6", "#6AD5E8", "#32B2DA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
