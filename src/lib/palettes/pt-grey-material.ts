import type { PaletteSource } from "../types";

const palette = {
  name: "grey material",
  description: "Sequential palette “grey material” from ggsci. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161", "#424242", "#212121"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
