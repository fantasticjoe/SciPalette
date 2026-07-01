import type { PaletteSource } from "../types";

const palette = {
  name: "Fall",
  description: "Diverging palette “Fall” from rcartocolor. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#3D5941", "#778868", "#B5B991", "#F6EDBD", "#EDBB8A", "#DE8A5A", "#CA562C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
