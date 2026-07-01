import type { PaletteSource } from "../types";

const palette = {
  name: "vermillion",
  description: "Qualitative palette “vermillion” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C39CA4", "#E05959", "#AC181D", "#713D3F", "#381F21"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
