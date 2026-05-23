import type { PaletteSource } from "../types";

const palette = {
  name: "Viridis-like",
  description: "Perceptually uniform sequential palette. Excellent for continuous data and maintains clarity in grayscale.",
  category: "sequential",
  colors: ["#440154", "#482878", "#3E4A89", "#31688E", "#26828E", "#1F9E89", "#35B779", "#6DCD59", "#B4DE2C", "#FDE724"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "perceptually-uniform", "continuous"],
  background: "white",
  source: "Inspired by matplotlib viridis"
} satisfies PaletteSource;

export default palette;
