import type { PaletteSource } from "../types";

const palette = {
  name: "Metabolomics Classes 9",
  description: "Categorical palette for lipid, metabolite, and pathway class summaries.",
  category: "categorical",
  colors: ["#1f6f7f", "#d68a32", "#6f8f35", "#6f5fb0", "#b8a62f", "#2f9a8a", "#c25065", "#8f7f2f", "#7a5a3f"],
  recommendedFor: ["bar", "scatter", "boxplot"],
  tags: ["categorical", "metabolomics", "classes", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
