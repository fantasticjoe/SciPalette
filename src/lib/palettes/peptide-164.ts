import type { PaletteSource } from "../types";

const palette = {
  name: "柠檬黄",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFFFE5", "#FFFFD1", "#FFFFBD", "#FFFFA8", "#FFFF94", "#FFFF80", "#FFFF6B", "#FFFF57", "#FFFF42", "#FFFF2E", "#FFFF19", "#F5F500", "#E0E000", "#CCCC00", "#B8B800", "#A3A300", "#8F8F00", "#7A7A00", "#666600", "#525200"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
