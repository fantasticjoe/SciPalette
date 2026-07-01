import type { PaletteSource } from "../types";

const palette = {
  name: "IguazuFalls",
  description: "Qualitative palette “IguazuFalls” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#415521", "#97AD3D", "#4C3425", "#7F6552", "#5A8093", "#9FBAD3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
