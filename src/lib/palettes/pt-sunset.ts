import type { PaletteSource } from "../types";

const palette = {
  name: "Sunset",
  description: "Sequential palette “Sunset” from PNWColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#41476B", "#675478", "#9E6374", "#C67B6F", "#DE9B71", "#EFBC82", "#FBDFA2"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
