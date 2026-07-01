import type { PaletteSource } from "../types";

const palette = {
  name: "halfdome",
  description: "Qualitative palette “halfdome” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A2A098", "#5E6B7B", "#233D3F", "#85ADCC", "#426714"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
