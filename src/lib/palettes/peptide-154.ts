import type { PaletteSource } from "../types";

const palette = {
  name: "赭石",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F2F0E6", "#E9E5D9", "#E0DACA", "#D7CFBB", "#CEC4AC", "#C5B99D", "#BCAD8E", "#B3A27F", "#A99770", "#A08C61", "#978152", "#8D7643", "#846B34", "#7B6025", "#725516", "#684A07", "#5F3F00", "#563400", "#4D2900", "#441E00"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
