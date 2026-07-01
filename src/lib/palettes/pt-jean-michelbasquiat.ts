import type { PaletteSource } from "../types";

const palette = {
  name: "Jean MichelBasquiat",
  description: "Qualitative palette “Jean MichelBasquiat” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#8CABD9", "#F6A7B8", "#F1EC7A", "#1D4D9F", "#F08838"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
