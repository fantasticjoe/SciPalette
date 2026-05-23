import type { PaletteSource } from "../types";

const palette = {
  name: "Clinical Trial 4",
  description: "Clean, distinguishable colors for clinical trial groups. Designed for clarity in medical publications.",
  category: "categorical",
  colors: ["#003f5c", "#bc5090", "#ffa600", "#58508d"],
  recommendedFor: ["bar", "line", "boxplot"],
  tags: ["clinical", "medical", "trial-groups"],
  background: "white"
} satisfies PaletteSource;

export default palette;
