import type { PaletteSource } from "../types";

const palette = {
  name: "Bias Slate Sand 9",
  description: "Diverging slate-to-sand palette for model bias and centered diagnostic maps.",
  category: "diverging",
  colors: ["#30495f", "#526a78", "#8295a0", "#ccd5d8", "#f4f1e8", "#decaa6", "#b99a66", "#866a42", "#5a432d"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "bias", "slate-sand", "model"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
