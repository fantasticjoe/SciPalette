import type { PaletteSource } from "../types";

const palette = {
  name: "LocusZoom",
  description: "LocusZoom discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#D43F3A", "#EEA236", "#5CB85C", "#46B8DA", "#357EBD", "#9632B8", "#B8B8B8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
