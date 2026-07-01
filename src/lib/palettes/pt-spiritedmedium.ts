import type { PaletteSource } from "../types";

const palette = {
  name: "SpiritedMedium",
  description: "Qualitative palette “SpiritedMedium” from the ghibli collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1F262E", "#353831", "#833437", "#8F8093", "#67B9E9", "#C3AF97", "#B7D9F2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ghibli"],
  background: "white",
  source: "ghibli (via paletteer)"
} satisfies PaletteSource;

export default palette;
