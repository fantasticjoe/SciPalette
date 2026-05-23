import type { PaletteSource } from "../types";

const palette = {
  name: "Enrichment Blue Amber 9",
  description: "Diverging blue-to-amber palette for enrichment scores and signed pathway activity.",
  category: "diverging",
  colors: ["#254f7a", "#4d7298", "#809bb5", "#cbd5df", "#f5f1e8", "#e5c98e", "#c89942", "#986d2b", "#66471f"],
  recommendedFor: ["heatmap", "bar"],
  tags: ["diverging", "enrichment", "blue-amber", "pathway"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
