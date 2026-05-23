import { calculateContrastRatio, type RgbColor } from "../color";
import { kMeansOklab } from "./kMeans";
import type { CandidateColor, CandidateColorSet } from "./types";

type ExtractOptions = {
  k?: number;
  seed?: number;
};

function classifyCandidate(lightness: number, chroma: number, contrast: number): CandidateColor["pool"] {
  if (lightness < 0.34 || lightness > 0.9 || chroma > 0.25) {
    return "rejected";
  }
  if (chroma < 0.045) {
    return "neutral";
  }
  if (contrast < 1.55) {
    return "rejected";
  }
  return "main";
}

export function extractCandidateColors(pixels: RgbColor[], options: ExtractOptions = {}): CandidateColorSet {
  const clusters = kMeansOklab(pixels, { k: options.k ?? 32, maxIterations: 40, seed: options.seed ?? 42 });
  const all = clusters.map<CandidateColor>((cluster) => {
    const contrast = calculateContrastRatio(cluster.rgb);
    return {
      center: cluster.center,
      rgb: cluster.rgb,
      hex: cluster.hex,
      count: cluster.count,
      weight: cluster.weight,
      lightness: cluster.lightness,
      chroma: cluster.chroma,
      hue: cluster.hue,
      contrastWithWhite: contrast,
      pool: classifyCandidate(cluster.lightness, cluster.chroma, contrast),
    };
  });

  return {
    all,
    main: all.filter((candidate) => candidate.pool === "main"),
    neutral: all.filter((candidate) => candidate.pool === "neutral"),
    rejected: all.filter((candidate) => candidate.pool === "rejected"),
  };
}
