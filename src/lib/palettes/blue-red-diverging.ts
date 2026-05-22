import type { Palette } from "../types";

const palette = {
  id: "blue-red-diverging",
  name: "Blue-Red Diverging",
  description: "Classic diverging palette for heatmaps and correlation matrices. Blue for negative, red for positive values.",
  category: "diverging",
  colors: ["#053061", "#2166AC", "#4393C3", "#92C5DE", "#D1E5F0", "#F7F7F7", "#FDDBC7", "#F4A582", "#D6604D", "#B2182B", "#67001F"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "correlation", "diverging"],
  colorblindSafe: false,
  background: "white"
} satisfies Palette;

export default palette;
