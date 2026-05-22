import type { Palette } from "../types";

const palette = {
  id: "soft-pastel-6",
  name: "Soft Pastel 6",
  description: "Gentle, muted colors for elegant figures. Works well for presentations and posters.",
  category: "categorical",
  colors: ["#A8DADC", "#F1FAEE", "#E63946", "#F4A261", "#2A9D8F", "#264653"],
  recommendedFor: ["bar", "scatter"],
  tags: ["pastel", "presentation", "poster"],
  colorblindSafe: false,
  background: "white"
} satisfies Palette;

export default palette;
