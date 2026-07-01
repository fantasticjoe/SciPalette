import type { PaletteSource } from "../types";

const palette = {
  name: "MarcChagall",
  description: "Qualitative palette “MarcChagall” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3F6F76", "#69B7CE", "#C65840", "#F4CE4B", "#62496F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
