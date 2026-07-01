import type { PaletteSource } from "../types";

const palette = {
  name: "Archambault",
  description: "Qualitative palette “Archambault” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#88A0DC", "#381A61", "#7C4B73", "#ED968C", "#AB3329", "#E78429", "#F9D14A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
