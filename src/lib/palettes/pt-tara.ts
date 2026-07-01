import type { PaletteSource } from "../types";

const palette = {
  name: "Tara",
  description: "Qualitative palette “Tara” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EAB1C6", "#D35E17", "#E18A1F", "#E9B109", "#829D44"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
