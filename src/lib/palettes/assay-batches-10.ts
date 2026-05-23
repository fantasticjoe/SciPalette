import type { PaletteSource } from "../types";

const palette = {
  name: "Assay Batches 10",
  description: "Balanced categorical palette for batch labels, assay panels, and method overlays.",
  category: "categorical",
  colors: ["#355c7d", "#c06c54", "#6c8f63", "#7b5d8f", "#d9a441", "#4f8f9f", "#b65f7a", "#7a7f42", "#8b6f47", "#5c6f91"],
  recommendedFor: ["scatter", "bar", "boxplot"],
  tags: ["categorical", "assay", "batches", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
