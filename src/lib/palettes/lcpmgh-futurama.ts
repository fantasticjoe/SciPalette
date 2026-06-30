import type { PaletteSource } from "../types";

const palette = {
  name: "Futurama",
  description: "Futurama discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FF6F00", "#C71000", "#008EA0", "#8A4198", "#5A9599", "#FF6348", "#84D7E1", "#FF95A8", "#3D3B25", "#ADE2D0", "#1A5354", "#3F4041"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
