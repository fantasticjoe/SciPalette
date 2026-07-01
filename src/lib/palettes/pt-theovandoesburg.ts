import type { PaletteSource } from "../types";

const palette = {
  name: "TheovanDoesburg",
  description: "Qualitative palette “TheovanDoesburg” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#BD748F", "#3D578E", "#BFAB68", "#DAD7D0", "#272928"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
