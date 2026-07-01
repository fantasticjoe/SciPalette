import type { PaletteSource } from "../types";

const palette = {
  name: "LightBlue2DarkBlue10Steps",
  description: "Sequential palette “LightBlue2DarkBlue10Steps” from colorBlindness. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E5FFFF", "#CCFAFF", "#B2F2FF", "#99E5FF", "#7FD4FF", "#65BFFF", "#4CA5FF", "#3288FF", "#1965FF", "#003FFF"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
