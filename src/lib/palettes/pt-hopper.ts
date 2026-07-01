import type { PaletteSource } from "../types";

const palette = {
  name: "hopper",
  description: "Qualitative palette “hopper” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#772F19", "#EAE48D", "#629073", "#0F2732", "#1B2320"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
