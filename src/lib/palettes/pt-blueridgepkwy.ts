import type { PaletteSource } from "../types";

const palette = {
  name: "BlueRidgePkwy",
  description: "Qualitative palette “BlueRidgePkwy” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EC8FA3", "#FCBA65", "#FAECCF", "#8D7F99", "#8C9D57", "#163343"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
