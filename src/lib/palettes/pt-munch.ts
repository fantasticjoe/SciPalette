import type { PaletteSource } from "../types";

const palette = {
  name: "munch",
  description: "Qualitative palette “munch” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D03908", "#193236", "#7E724C", "#B8A463", "#DA7618"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
