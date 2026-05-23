import type { PaletteSource } from "../types";

const palette = {
  name: "Morphology Violet Green 9",
  description: "Diverging violet-to-green palette for morphology scores and centered image features.",
  category: "diverging",
  colors: ["#4f3b70", "#725f91", "#9f8fb0", "#d2c9dc", "#f4f1ec", "#c8d8bf", "#91b184", "#638a5a", "#3f623a"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "morphology", "violet-green", "imaging"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
