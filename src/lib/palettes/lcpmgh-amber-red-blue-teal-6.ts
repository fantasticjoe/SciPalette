import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Red Blue Teal 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#6AD1A3", "#84ADDC", "#88B6F1", "#989898", "#FF988B", "#FFDE7B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
