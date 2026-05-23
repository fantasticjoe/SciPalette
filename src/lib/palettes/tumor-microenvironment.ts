import type { PaletteSource } from "../types";

const palette = {
  name: "Tumor Microenvironment",
  description: "Colors for tumor microenvironment cell types. Includes tumor, immune, and stromal populations.",
  category: "categorical",
  colors: ["#D62728", "#FF7F0E", "#2CA02C", "#1F77B4", "#9467BD", "#8C564B", "#E377C2", "#BCBD22"],
  recommendedFor: ["umap", "bar", "scatter"],
  tags: ["cancer", "tumor", "microenvironment", "immune"],
  colorblindSafe: false,
  background: "white"
} satisfies PaletteSource;

export default palette;
