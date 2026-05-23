import type { PaletteSource } from "../types";

const palette = {
  name: "Cividis-like",
  description: "Optimized for colorblind readers. Blue to yellow sequential palette with excellent accessibility.",
  category: "sequential",
  colors: ["#00224E", "#123570", "#3B496C", "#575D6D", "#707173", "#8A8678", "#A49B75", "#C1B16B", "#E1C75B", "#FFDF3F"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "colorblind-safe", "accessible"],
  colorblindSafe: true,
  background: "white",
  source: "Inspired by matplotlib cividis"
} satisfies PaletteSource;

export default palette;
