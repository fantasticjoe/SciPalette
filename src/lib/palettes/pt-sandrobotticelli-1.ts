import type { PaletteSource } from "../types";

const palette = {
  name: "SandroBotticelli 1",
  description: "Qualitative palette “SandroBotticelli 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#272725", "#DDBD85", "#DA694F", "#A54A48", "#FDFFE5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
