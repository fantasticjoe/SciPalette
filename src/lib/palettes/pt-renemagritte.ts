import type { PaletteSource } from "../types";

const palette = {
  name: "ReneMagritte",
  description: "Qualitative palette “ReneMagritte” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B60614", "#3A282F", "#909018", "#E3BFA1", "#EE833E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
