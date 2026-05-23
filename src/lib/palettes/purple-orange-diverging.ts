import type { PaletteSource } from "../types";

const palette = {
  name: "Purple-Orange Diverging",
  description: "Colorblind-friendly diverging palette. Excellent for showing positive and negative changes.",
  category: "diverging",
  colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#F97B72"],
  recommendedFor: ["heatmap", "volcano"],
  tags: ["diverging", "colorblind-safe", "fold-change"],
  background: "white"
} satisfies PaletteSource;

export default palette;
