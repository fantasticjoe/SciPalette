import type { PaletteSource } from "../types";

const palette = {
  name: "WassilyKandinsky 2",
  description: "Qualitative palette “WassilyKandinsky 2” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C13C53", "#DA73A8", "#4052BD", "#EFE96D", "#D85143"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
