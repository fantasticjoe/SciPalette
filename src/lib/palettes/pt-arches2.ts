import type { PaletteSource } from "../types";

const palette = {
  name: "Arches2",
  description: "Qualitative palette “Arches2” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3A1F46", "#7F4B89", "#B46DB3", "#E3A5D6", "#F3DAE4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
