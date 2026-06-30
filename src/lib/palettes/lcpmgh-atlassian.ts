import type { PaletteSource } from "../types";

const palette = {
  name: "Atlassian",
  description: "Atlassian discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#4688EC", "#94C748", "#C97CF4", "#FCA700", "#1558BC", "#964AC0", "#42B2D7", "#E06C00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
