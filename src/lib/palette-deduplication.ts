import { hexToRgb, oklabDistance, rgbToOklab, type OklabColor } from "./art2pal/color";
import type { Palette } from "./types";

export interface PaletteFingerprintOptions {
  ignoreOrder?: boolean;
}

export interface PaletteDuplicatePair {
  ids: [string, string];
  palettes: [Palette, Palette];
  distance: number;
  fingerprint?: string;
}

export interface PaletteDeduplicationOptions {
  nearDuplicateDistance?: number;
}

export interface PaletteDeduplicationReport {
  exact: PaletteDuplicatePair[];
  orderInsensitive: PaletteDuplicatePair[];
  near: PaletteDuplicatePair[];
}

const DEFAULT_NEAR_DUPLICATE_DISTANCE = 0.025;

export function normalizePaletteColor(color: string): string {
  const normalized = color.trim().replace(/^#/, "").toLowerCase();
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((character) => character + character)
          .join("")
      : normalized;

  if (!/^[0-9a-f]{6}$/.test(expanded)) {
    throw new Error(`Invalid HEX color: ${color}`);
  }

  return `#${expanded}`;
}

export function createPaletteFingerprint(colors: string[], options: PaletteFingerprintOptions = {}): string {
  const normalized = colors.map(normalizePaletteColor);
  const fingerprintColors = options.ignoreOrder
    ? [...normalized].sort((first, second) => second.localeCompare(first))
    : normalized;

  return fingerprintColors.join("|");
}

export function getPaletteColorDistance(first: string[], second: string[]): number {
  const firstLabs = first.map(hexToOklab);
  const secondLabs = second.map(hexToOklab);

  if (firstLabs.length === 0 || secondLabs.length === 0) {
    return Number.POSITIVE_INFINITY;
  }

  return (averageNearestDistance(firstLabs, secondLabs) + averageNearestDistance(secondLabs, firstLabs)) / 2;
}

export function findPaletteDuplicates(
  paletteList: Palette[],
  options: PaletteDeduplicationOptions = {}
): PaletteDeduplicationReport {
  const nearDuplicateDistance = options.nearDuplicateDistance ?? DEFAULT_NEAR_DUPLICATE_DISTANCE;
  const exact: PaletteDuplicatePair[] = [];
  const orderInsensitive: PaletteDuplicatePair[] = [];
  const near: PaletteDuplicatePair[] = [];
  const exactCanonicalByFingerprint = new Map<string, Palette>();
  const exactDuplicateIds = new Set<string>();
  const coveredNearDuplicateIds = new Set<string>();

  for (let firstIndex = 0; firstIndex < paletteList.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < paletteList.length; secondIndex += 1) {
      const first = paletteList[firstIndex];
      const second = paletteList[secondIndex];

      if (exactDuplicateIds.has(first.id)) {
        continue;
      }

      const exactFingerprint = createPaletteFingerprint(first.colors);
      const secondExactFingerprint = createPaletteFingerprint(second.colors);

      if (exactFingerprint === secondExactFingerprint) {
        const canonical = exactCanonicalByFingerprint.get(exactFingerprint) ?? first;
        exactCanonicalByFingerprint.set(exactFingerprint, canonical);
        if (canonical.id !== second.id) {
          exact.push(createDuplicatePair(canonical, second, 0, exactFingerprint));
        }
        exactDuplicateIds.add(second.id);
        coveredNearDuplicateIds.add(second.id);
        continue;
      }

      if (exactDuplicateIds.has(first.id) || exactDuplicateIds.has(second.id)) {
        continue;
      }

      const unorderedFingerprint = createPaletteFingerprint(first.colors, { ignoreOrder: true });
      const secondUnorderedFingerprint = createPaletteFingerprint(second.colors, { ignoreOrder: true });

      if (unorderedFingerprint === secondUnorderedFingerprint) {
        orderInsensitive.push(createDuplicatePair(first, second, 0, unorderedFingerprint));
        coveredNearDuplicateIds.add(second.id);
        continue;
      }

      if (coveredNearDuplicateIds.has(first.id) || coveredNearDuplicateIds.has(second.id)) {
        continue;
      }

      const distance = getPaletteColorDistance(first.colors, second.colors);
      if (distance <= nearDuplicateDistance) {
        near.push(createDuplicatePair(first, second, distance));
        coveredNearDuplicateIds.add(second.id);
      }
    }
  }

  return { exact, orderInsensitive, near };
}

function hexToOklab(color: string): OklabColor {
  return rgbToOklab(hexToRgb(normalizePaletteColor(color)));
}

function averageNearestDistance(source: OklabColor[], target: OklabColor[]): number {
  const total = source.reduce((sum, color) => {
    const nearest = Math.min(...target.map((candidate) => oklabDistance(color, candidate)));
    return sum + nearest;
  }, 0);

  return total / source.length;
}

function createDuplicatePair(
  first: Palette,
  second: Palette,
  distance: number,
  fingerprint?: string
): PaletteDuplicatePair {
  return {
    ids: [first.id, second.id],
    palettes: [first, second],
    distance,
    fingerprint,
  };
}
