import type { PaletteSource } from "../types";

const palette = {
  name: "UChicago",
  description: "UChicago discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#800000", "#767676", "#FFA319", "#8A9045", "#155F83", "#C16622", "#8F3931", "#58593F", "#350E20"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
