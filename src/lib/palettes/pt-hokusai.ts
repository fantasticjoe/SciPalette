import type { PaletteSource } from "../types";

const palette = {
  name: "hokusai",
  description: "Qualitative palette “hokusai” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7F9DA7", "#C1B8AA", "#DDD4C6", "#0C2348", "#454A4D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
