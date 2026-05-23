import type { PaletteSource } from "../types";

const palette = {
  name: "Terrain Diverging 9",
  description: "Diverging green-to-brown palette for terrain-like deviations and environmental baselines.",
  category: "diverging",
  colors: ["#315f3f", "#5f7f4f", "#91a573", "#d0d8bf", "#f4f1e5", "#dfc68f", "#b88a4f", "#865a32", "#583821"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "terrain", "environment", "centered"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
