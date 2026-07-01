import type { PaletteSource } from "../types";

const palette = {
  name: "sPBIRdPu",
  description: "Sequential palette “sPBIRdPu” from Redmonder. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FEC0BF", "#E9AFB1", "#D39DA3", "#BE8C94", "#A97B86", "#936978", "#7E586A", "#68465B", "#53354D"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
