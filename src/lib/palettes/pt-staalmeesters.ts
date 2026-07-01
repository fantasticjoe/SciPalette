import type { PaletteSource } from "../types";

const palette = {
  name: "staalmeesters",
  description: "Qualitative palette “staalmeesters” from the dutchmasters collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A13826", "#701B06", "#4C3114", "#7A491E", "#D7E1D6", "#060A0D", "#D39C7B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "dutchmasters"],
  background: "white",
  source: "dutchmasters (via paletteer)"
} satisfies PaletteSource;

export default palette;
