import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Blue 11",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#858585", "#93B190", "#B6E2FB", "#B9BB8E", "#D1D1D1", "#DB6A5D", "#DFDEE1", "#E1E3FF", "#E4CAD1", "#FCCFE7", "#FF8901"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
