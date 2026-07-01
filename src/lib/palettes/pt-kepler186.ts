import type { PaletteSource } from "../types";

const palette = {
  name: "kepler186",
  description: "Diverging palette “kepler186” from futurevisions. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#803233", "#ED3F39", "#E46844", "#DC876C", "#FEFEFE", "#ADD0B5", "#8FA3AB", "#484357", "#303638"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
