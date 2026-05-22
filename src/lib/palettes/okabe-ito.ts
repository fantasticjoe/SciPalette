import type { Palette } from "../types";

const palette = {
  id: "okabe-ito",
  name: "Okabe-Ito",
  description: "The gold standard for colorblind-friendly scientific figures. Widely recommended by Nature and Science journals.",
  category: "categorical",
  colors: ["#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7", "#000000"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["colorblind-safe", "standard", "publication"],
  colorblindSafe: true,
  background: "white",
  source: "Okabe & Ito (2008)"
} satisfies Palette;

export default palette;
