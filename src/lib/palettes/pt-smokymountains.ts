import type { PaletteSource } from "../types";

const palette = {
  name: "SmokyMountains",
  description: "Qualitative palette “SmokyMountains” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D58A60", "#40663F", "#497381", "#548F01", "#CFA3EE", "#4E5462"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
