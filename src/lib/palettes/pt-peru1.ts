import type { PaletteSource } from "../types";

const palette = {
  name: "Peru1",
  description: "Qualitative palette “Peru1” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B5361C", "#E35E28", "#1C9D7C", "#31C7BA", "#369CC9", "#3A507F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
