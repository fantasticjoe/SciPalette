import type { PaletteSource } from "../types";

const palette = {
  name: "Material Design",
  description: "Material Design discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FFEBED", "#FFCCD2", "#EE9999", "#E57272", "#EE5250", "#F34335", "#E53934", "#D22E2E", "#C52727", "#B71B1B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
