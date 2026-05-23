import type { PaletteSource } from "../types";

const palette = {
  name: "Ecology Species 12",
  description: "Earth-toned categorical palette for species groups, environments, and ecological comparisons.",
  category: "categorical",
  colors: ["#406f5f", "#b87542", "#5f7f9f", "#8a6a8f", "#a9923d", "#3f8f78", "#b45f68", "#778a45", "#8f6d4f", "#5f7492", "#6f875a", "#a66b5c"],
  recommendedFor: ["scatter", "bar", "boxplot"],
  tags: ["categorical", "ecology", "species", "earth"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
