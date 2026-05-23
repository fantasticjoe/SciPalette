import type { PaletteSource } from "../types";

const palette = {
  name: "Editorial Categorical 8",
  description: "Restrained categorical palette for polished multipanel figures and explanatory graphics.",
  category: "categorical",
  colors: ["#2e4057", "#d05c3f", "#3f7d69", "#935f8a", "#c9a43a", "#556fa3", "#8a7a3f", "#9f5a54"],
  recommendedFor: ["bar", "line", "scatter"],
  tags: ["categorical", "editorial", "muted", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
