import type { PaletteSource } from "../types";

const palette = {
  name: "COSMIC",
  description: "COSMIC discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#2E2A2B", "#CF4E9C", "#8C57A2", "#358DB9", "#82581F", "#2F509E", "#E5614C", "#97A1A7", "#3DA873", "#DC9445"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
