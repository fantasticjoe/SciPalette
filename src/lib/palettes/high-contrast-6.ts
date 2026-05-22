import type { Palette } from "../types";

const palette = {
  id: "high-contrast-6",
  name: "High Contrast 6",
  description: "Bold, saturated colors for maximum visibility. Ideal for presentations and posters viewed from distance.",
  category: "categorical",
  colors: ["#FF0000", "#0000FF", "#00FF00", "#FFFF00", "#FF00FF", "#00FFFF"],
  recommendedFor: ["bar", "scatter"],
  tags: ["high-contrast", "presentation", "bold"],
  colorblindSafe: false,
  background: "white"
} satisfies Palette;

export default palette;
