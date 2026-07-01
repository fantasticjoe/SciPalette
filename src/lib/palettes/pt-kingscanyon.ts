import type { PaletteSource } from "../types";

const palette = {
  name: "KingsCanyon",
  description: "Qualitative palette “KingsCanyon” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#613921", "#A77652", "#F2C27B", "#AAC9ED", "#44637D", "#8E949F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
