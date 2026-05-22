import type { Palette } from "../types";

const palette = {
  id: "heatmap-blue-white-red",
  name: "Heatmap Blue-White-Red",
  description: "Standard heatmap gradient for gene expression data. White center for zero/baseline values.",
  category: "heatmap",
  colors: ["#0000FF", "#4040FF", "#8080FF", "#C0C0FF", "#FFFFFF", "#FFC0C0", "#FF8080", "#FF4040", "#FF0000"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "gene-expression", "z-score"],
  colorblindSafe: false,
  background: "white"
} satisfies Palette;

export default palette;
