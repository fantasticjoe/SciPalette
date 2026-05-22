import type { Palette } from "../types";

const palette = {
  id: "nature-muted-8",
  name: "Nature Muted 8",
  description: "Soft, professional colors inspired by high-impact journals. Perfect for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F", "#EDC948", "#B07AA1", "#FF9DA7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["publication", "professional", "multi-group"],
  colorblindSafe: true,
  background: "white",
  source: "Inspired by scientific visualization best practices"
} satisfies Palette;

export default palette;
