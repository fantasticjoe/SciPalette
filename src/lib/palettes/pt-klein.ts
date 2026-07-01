import type { PaletteSource } from "../types";

const palette = {
  name: "Klein",
  description: "Qualitative palette “Klein” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF4D6F", "#579EA4", "#DF7713", "#F9C000", "#86AD34", "#5D7298", "#81B28D", "#7E1A2F", "#2D2651", "#C8350D", "#BD777A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
