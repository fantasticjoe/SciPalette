import type { Palette } from "../types";

const palette = {
  id: "clinical-trial-4",
  name: "Clinical Trial 4",
  description: "Clean, distinguishable colors for clinical trial groups. Designed for clarity in medical publications.",
  category: "categorical",
  colors: ["#003f5c", "#bc5090", "#ffa600", "#58508d"],
  recommendedFor: ["bar", "line", "boxplot"],
  tags: ["clinical", "medical", "trial-groups"],
  colorblindSafe: true,
  background: "white"
} satisfies Palette;

export default palette;
