import type { PaletteSource } from "../types";

const palette = {
  name: "Immunology Cell Types",
  description: "Carefully selected colors for immune cell populations. Each color represents traditional immunology color conventions.",
  category: "categorical",
  colors: ["#CD4F39", "#6C8EBF", "#82B366", "#D6B656", "#9673A6", "#E07A5F"],
  recommendedFor: ["bar", "scatter", "umap"],
  tags: ["immunology", "cell-types", "flow-cytometry"],
  colorblindSafe: true,
  background: "white"
} satisfies PaletteSource;

export default palette;
