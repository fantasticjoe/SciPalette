import type { PaletteSource } from "../types";

const palette = {
  name: "FridaKahlo",
  description: "Diverging palette “FridaKahlo” from lisa. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#121510", "#6D8325", "#D6CFB7", "#E5AD4F", "#BD5630"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
