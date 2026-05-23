import type { PaletteSource } from "../types";

const palette = {
  name: "Correlation Teal Brown 9",
  description: "Diverging teal-to-brown palette for correlations, centered statistics, and signed associations.",
  category: "diverging",
  colors: ["#1f5f65", "#3f7f80", "#73a5a0", "#c0d6cf", "#f4f1e8", "#dfc7a8", "#bf9568", "#946742", "#664227"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "correlation", "teal-brown", "centered"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
