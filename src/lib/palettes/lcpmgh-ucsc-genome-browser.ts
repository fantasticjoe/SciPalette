import type { PaletteSource } from "../types";

const palette = {
  name: "UCSC Genome Browser",
  description: "UCSC Genome Browser discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FF0000", "#FF9900", "#FFCC00", "#00FF00", "#6699FF", "#CC33FF", "#99991E", "#999999", "#FF00CC", "#CC0000", "#FFCCCC", "#FFFF00", "#CCFF00", "#358000", "#0000CC", "#99CCFF", "#00FFFF", "#CCFFFF", "#9900CC", "#CC99FF", "#996600", "#666600", "#666666", "#CCCCCC", "#79CC3D", "#CCCC99"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
