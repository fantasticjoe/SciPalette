import type { PaletteSource } from "../types";

const palette = {
  name: "雾霾蓝",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E8EDF0", "#DCE4E8", "#D0DCE0", "#C4D3D8", "#B8CAD0", "#ACC1C8", "#A0B8C0", "#94AFB8", "#88A6B0", "#7C9DA8", "#7094A0", "#648B98", "#588290", "#4C7988", "#407080", "#346778", "#285E70", "#1C5568", "#104C60", "#044358"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
