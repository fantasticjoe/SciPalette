import { oklabDistance, oklabToRgb, rgbToHex, rgbToOklab, rgbToOklch, type OklabColor, type RgbColor } from "../color";
import type { KMeansCluster } from "./types";

type KMeansOptions = {
  k?: number;
  maxIterations?: number;
  seed?: number;
};

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function mean(points: OklabColor[]): OklabColor {
  if (points.length === 0) {
    return { L: 0, a: 0, b: 0 };
  }

  return {
    L: points.reduce((sum, point) => sum + point.L, 0) / points.length,
    a: points.reduce((sum, point) => sum + point.a, 0) / points.length,
    b: points.reduce((sum, point) => sum + point.b, 0) / points.length,
  };
}

function initializeCenters(points: OklabColor[], k: number, seed: number): OklabColor[] {
  const random = seededRandom(seed);
  const centers: OklabColor[] = [];

  centers.push(points[Math.floor(random() * points.length)]);

  while (centers.length < k) {
    const distances = points.map((point) => {
      const nearest = Math.min(...centers.map((center) => oklabDistance(point, center)));
      return nearest ** 2;
    });
    const total = distances.reduce((sum, distance) => sum + distance, 0);
    let threshold = random() * total;
    let selected = points[points.length - 1];

    for (let i = 0; i < points.length; i += 1) {
      threshold -= distances[i];
      if (threshold <= 0) {
        selected = points[i];
        break;
      }
    }

    centers.push(selected);
  }

  return centers;
}

export function kMeansOklab(pixels: RgbColor[], options: KMeansOptions = {}): KMeansCluster[] {
  const k = Math.max(1, Math.min(options.k ?? 32, pixels.length));
  const maxIterations = options.maxIterations ?? 40;
  const seed = options.seed ?? 42;
  const points = pixels.map(rgbToOklab);

  if (points.length === 0) {
    return [];
  }

  let centers = initializeCenters(points, k, seed);
  let assignments = new Array<number>(points.length).fill(-1);

  for (let iteration = 0; iteration < maxIterations; iteration += 1) {
    let changed = false;

    assignments = points.map((point, index) => {
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;
      for (let centerIndex = 0; centerIndex < centers.length; centerIndex += 1) {
        const distance = oklabDistance(point, centers[centerIndex]);
        if (distance < nearestDistance) {
          nearestIndex = centerIndex;
          nearestDistance = distance;
        }
      }
      if (assignments[index] !== nearestIndex) {
        changed = true;
      }
      return nearestIndex;
    });

    const grouped = centers.map((_, centerIndex) => points.filter((_, pointIndex) => assignments[pointIndex] === centerIndex));
    centers = grouped.map((group, index) => (group.length > 0 ? mean(group) : centers[index]));

    if (!changed) {
      break;
    }
  }

  return centers
    .map((center, index) => {
      const count = assignments.filter((assignment) => assignment === index).length;
      const rgb = oklabToRgb(center);
      const lch = rgbToOklch(rgb);
      return {
        center,
        lch,
        rgb,
        hex: rgbToHex(rgb),
        count,
        weight: count / pixels.length,
        lightness: lch.L,
        chroma: lch.C,
        hue: lch.h,
      };
    })
    .filter((cluster) => cluster.count > 0)
    .sort((a, b) => b.weight - a.weight);
}
