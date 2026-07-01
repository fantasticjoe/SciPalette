import type { PaletteSource } from "../types";

const palette = {
  name: "Glacier",
  description: "Qualitative palette “Glacier” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#01353D", "#088096", "#58B3C7", "#7AD4E4", "#B8FCFC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
