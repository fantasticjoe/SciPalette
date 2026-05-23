import type { PaletteSource } from "../types";

const palette = {
  name: "Isotope Blue Copper 9",
  description: "Diverging blue-to-copper palette for isotope ratios and signed chemical deviations.",
  category: "diverging",
  colors: ["#234f72", "#467294", "#7c9bb0", "#c7d5dd", "#f5f1e8", "#e1c0a4", "#c18463", "#96583a", "#683622"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "chemistry", "isotope", "blue-copper"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
