import type { PaletteSource } from "../types";

const palette = {
  name: "PCA Axis Indigo Vermillion 9",
  description: "Diverging indigo-to-vermillion palette for principal component loadings and signed axes.",
  category: "diverging",
  colors: ["#353f78", "#59649b", "#8f98bd", "#d0d4e4", "#f5f1ec", "#e6beb3", "#cf806d", "#a95044", "#743028"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "pca", "axis", "loadings"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
