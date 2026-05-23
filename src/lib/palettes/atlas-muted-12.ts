import type { PaletteSource } from "../types";

const palette = {
  name: "Atlas Muted 12",
  description: "Muted categorical palette for dense annotations where strong saturation would dominate the figure.",
  category: "categorical",
  colors: ["#3f6f8f", "#b76e4b", "#668a58", "#7d6494", "#b89145", "#4a8c86", "#ad667d", "#7f8248", "#8a6f55", "#6976a8", "#6d8f75", "#a6635f"],
  recommendedFor: ["umap", "scatter", "bar"],
  tags: ["categorical", "atlas", "muted", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
