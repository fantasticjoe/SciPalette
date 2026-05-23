import type { PaletteSource } from "../types";

const palette = {
  name: "Protein Family 9",
  description: "Categorical palette for protein families, domains, and structural annotation legends.",
  category: "categorical",
  colors: ["#2b5f8a", "#c77a3a", "#4f8a62", "#735aa0", "#b89f35", "#338f92", "#b85272", "#7f8a35", "#8a6040"],
  recommendedFor: ["bar", "scatter"],
  tags: ["categorical", "protein", "annotation", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
