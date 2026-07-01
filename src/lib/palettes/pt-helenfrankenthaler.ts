import type { PaletteSource } from "../types";

const palette = {
  name: "HelenFrankenthaler",
  description: "Qualitative palette “HelenFrankenthaler” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5D7342", "#D7AE04", "#ECD7B8", "#A58B8C", "#272727"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
