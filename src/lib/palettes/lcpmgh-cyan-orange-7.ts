import type { PaletteSource } from "../types";

const palette = {
  name: "Cyan Orange 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#00ADEF", "#63BA45", "#D7DCBE", "#D9DDBA", "#E69C81", "#E6BA9D", "#E7CEA5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
