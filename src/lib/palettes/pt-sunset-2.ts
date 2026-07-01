import type { PaletteSource } from "../types";

const palette = {
  name: "sunset",
  description: "Diverging palette “sunset” from khroma. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#364B9A", "#4A7BB7", "#6EA6CD", "#98CAE1", "#C2E4EF", "#EAECCC", "#FEDA8B", "#FDB366", "#F67E4B", "#DD3D2D", "#A50026"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "khroma"],
  background: "white",
  source: "khroma (via paletteer)"
} satisfies PaletteSource;

export default palette;
