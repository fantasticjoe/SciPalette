import type { PaletteSource } from "../types";

const palette = {
  name: "苍蓝",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E9EAEC", "#DCDFE1", "#CFD4D6", "#C2C9CB", "#B5BEC0", "#A8B3B5", "#9BA8AA", "#8E9DA0", "#819295", "#74878A", "#677C7F", "#5A7174", "#4D6669", "#405B5E", "#335053", "#264548", "#193A3D", "#0C2F32", "#002427", "#00191C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
