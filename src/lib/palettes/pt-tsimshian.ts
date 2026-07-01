import type { PaletteSource } from "../types";

const palette = {
  name: "Tsimshian",
  description: "Qualitative palette “Tsimshian” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#582310", "#AA361D", "#82C45F", "#318F49", "#0CB4BB", "#2673A3", "#473D7D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
