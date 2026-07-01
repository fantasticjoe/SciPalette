import type { PaletteSource } from "../types";

const palette = {
  name: "MelonPomelo",
  description: "Qualitative palette “MelonPomelo” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EE404E", "#F99D53", "#F9E7C2", "#24C852", "#4F5791", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
