import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#979998", "#C69287", "#DDDDDF", "#E4CD87", "#E79A90", "#EFBC91", "#FAE5B8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
