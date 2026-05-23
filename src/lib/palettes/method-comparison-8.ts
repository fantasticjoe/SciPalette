import type { PaletteSource } from "../types";

const palette = {
  name: "Method Comparison 8",
  description: "Readable categorical palette for benchmark methods and algorithm comparisons.",
  category: "categorical",
  colors: ["#245f9a", "#d07032", "#3f8a5f", "#6a55a0", "#c8a235", "#2f8fa0", "#b84f68", "#8a8a32"],
  recommendedFor: ["line", "bar", "scatter"],
  tags: ["categorical", "methods", "benchmark", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
