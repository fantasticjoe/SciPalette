import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red 14",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#26445E", "#474769", "#4C7780", "#73A5A2", "#7C4D77", "#B2B6C1", "#B55384", "#C76B60", "#D68438", "#D6E2E2", "#E4A031", "#F0EFED", "#F3DBC1", "#F6E2C1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
