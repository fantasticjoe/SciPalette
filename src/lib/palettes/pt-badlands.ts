import type { PaletteSource } from "../types";

const palette = {
  name: "Badlands",
  description: "Qualitative palette “Badlands” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5495CF", "#F5AF4D", "#DB4743", "#7C873E", "#FEF4D5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
