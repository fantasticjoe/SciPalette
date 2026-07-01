import type { PaletteSource } from "../types";

const palette = {
  name: "PietMondrian",
  description: "Qualitative palette “PietMondrian” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#314290", "#4A71C0", "#F1F2ED", "#F0D32D", "#AB3A2C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
