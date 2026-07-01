import type { PaletteSource } from "../types";

const palette = {
  name: "wetland",
  description: "Qualitative palette “wetland” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DED4C8", "#AD6F4F", "#AEC96F", "#2B3851", "#3F320D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
