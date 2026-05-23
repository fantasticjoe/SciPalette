import type { PaletteSource } from "../types";

const palette = {
  name: "Nature Muted 8",
  description: "Soft, professional colors inspired by high-impact journals. Perfect for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F", "#EDC948", "#B07AA1", "#FF9DA7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["publication", "professional", "multi-group"],
  background: "white",
  source: "Inspired by scientific visualization best practices"
} satisfies PaletteSource;

export default palette;
