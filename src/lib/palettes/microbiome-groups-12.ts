import type { PaletteSource } from "../types";

const palette = {
  name: "Microbiome Groups 12",
  description: "Categorical palette for taxonomic groups and compositional microbiome summaries.",
  category: "categorical",
  colors: ["#2f6f4f", "#b67a32", "#4f7fa0", "#8a5f92", "#9f9a35", "#2f8f7a", "#a95f62", "#6f8a3f", "#7a5f3f", "#5f6fa8", "#4f8a5f", "#b05f45"],
  recommendedFor: ["bar", "scatter"],
  tags: ["categorical", "microbiome", "taxonomy", "composition"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
