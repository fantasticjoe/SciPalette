import type { PaletteSource } from "../types";

const palette = {
  name: "Effect Size Navy Orange 9",
  description: "Diverging navy-to-orange palette for signed effect sizes and treatment deltas.",
  category: "diverging",
  colors: ["#203f68", "#3f648f", "#7590b0", "#c1cfdf", "#f4f1e8", "#e6c39d", "#d08a4d", "#a95f2f", "#733a21"],
  recommendedFor: ["heatmap", "volcano", "bar"],
  tags: ["diverging", "effect-size", "navy-orange", "centered"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
