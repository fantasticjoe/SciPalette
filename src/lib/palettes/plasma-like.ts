import type { Palette } from "../types";

const palette = {
  id: "plasma-like",
  name: "Plasma-like",
  description: "Vibrant sequential palette from dark purple to bright yellow. High contrast for highlighting patterns.",
  category: "sequential",
  colors: ["#0D0887", "#46039F", "#7201A8", "#9C179E", "#BD3786", "#D8576B", "#ED7953", "#FB9F3A", "#FDCA26", "#F0F921"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "vibrant", "high-contrast"],
  colorblindSafe: true,
  background: "white",
  source: "Inspired by matplotlib plasma"
} satisfies Palette;

export default palette;
