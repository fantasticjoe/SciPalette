import type { PaletteSource } from "../types";

const palette = {
  name: "Tableau Scientific 10",
  description: "Balanced palette for scientific data visualization. Good contrast and professional appearance.",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F", "#EDC948", "#B07AA1", "#FF9DA7", "#9C755F", "#BAB0AC"],
  recommendedFor: ["bar", "line", "scatter"],
  tags: ["balanced", "professional"],
  colorblindSafe: true,
  background: "white"
} satisfies PaletteSource;

export default palette;
