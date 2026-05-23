import type { PaletteSource } from "../types";

const palette = {
  name: "Microbiome Groups 12",
  description: "Categorical palette for taxonomic groups and compositional microbiome summaries.",
  category: "categorical",
  colors: ["#164f5f", "#c95f35", "#7f5ab5", "#3f8f63", "#d3a330", "#2f6f9f", "#b84f5f", "#6f7f2f", "#8a5f35", "#3f9a9a", "#9a6a90", "#5f6f4f"],
  recommendedFor: ["bar", "scatter"],
  tags: ["categorical", "microbiome", "taxonomy", "composition"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
