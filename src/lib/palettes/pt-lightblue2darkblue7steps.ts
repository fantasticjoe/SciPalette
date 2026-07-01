import type { PaletteSource } from "../types";

const palette = {
  name: "LightBlue2DarkBlue7Steps",
  description: "Sequential palette “LightBlue2DarkBlue7Steps” from colorBlindness. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFFFFF", "#CCFDFF", "#99F8FF", "#66F0FF", "#33E4FF", "#00AACC", "#007A99"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
