import type { PaletteSource } from "../types";

const palette = {
  name: "High Contrast 6",
  description: "Bold, saturated colors for maximum visibility. Ideal for presentations and posters viewed from distance.",
  category: "categorical",
  colors: ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FF00FF", "#00FFFF"],
  recommendedFor: ["bar", "scatter"],
  tags: ["high-contrast", "presentation", "bold"],
  background: "white"
} satisfies PaletteSource;

export default palette;
