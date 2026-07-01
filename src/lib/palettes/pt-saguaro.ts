import type { PaletteSource } from "../types";

const palette = {
  name: "Saguaro",
  description: "Qualitative palette “Saguaro” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#847CA3", "#E45A5A", "#F4A65E", "#80792B", "#F2D56F", "#1A1237"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
