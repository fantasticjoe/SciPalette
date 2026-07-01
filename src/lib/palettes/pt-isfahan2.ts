import type { PaletteSource } from "../types";

const palette = {
  name: "Isfahan2",
  description: "Qualitative palette “Isfahan2” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D7ACA1", "#DDC000", "#79AD41", "#34B6C6", "#4063A3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
