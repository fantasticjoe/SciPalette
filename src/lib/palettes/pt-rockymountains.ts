import type { PaletteSource } from "../types";

const palette = {
  name: "RockyMountains",
  description: "Qualitative palette “RockyMountains” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EBECF0", "#DDC70F", "#4B4E55", "#62589F", "#2B313F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
