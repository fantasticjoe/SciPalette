import type { PaletteSource } from "../types";

const palette = {
  name: "tidepool",
  description: "Qualitative palette “tidepool” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#84A6A2", "#4A5352", "#151E2F", "#D7C8C6", "#BE5A47", "#604A76"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
