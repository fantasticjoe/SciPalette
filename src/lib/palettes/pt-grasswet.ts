import type { PaletteSource } from "../types";

const palette = {
  name: "grasswet",
  description: "Qualitative palette “grasswet” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4C4E32", "#908E6C", "#5D8FBC", "#97C2E2", "#17252A", "#B4A480"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
