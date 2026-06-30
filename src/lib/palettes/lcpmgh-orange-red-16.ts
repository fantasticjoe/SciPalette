import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red 16",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#2D8875", "#52AADC", "#7C7979", "#7FABD1", "#91CCC0", "#963B79", "#97D0C5", "#B5CE4E", "#BD7795", "#C7C1DE", "#C89736", "#D75B4E", "#EC6E66", "#EEB6D4", "#F39865", "#F7AC53"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
