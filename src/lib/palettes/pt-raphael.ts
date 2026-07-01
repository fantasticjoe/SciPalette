import type { PaletteSource } from "../types";

const palette = {
  name: "raphael",
  description: "Qualitative palette “raphael” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FBE6C0", "#6B502C", "#BF2A1D", "#666581", "#E5A55E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
