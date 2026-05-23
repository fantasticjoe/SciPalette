import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import {
  calculateContrastRatio,
  hexToRgb,
  oklabDistance,
  oklchToRgb,
  rgbToHex,
  rgbToOklab,
  rgbToOklch,
} from "../src/lib/art2pal/color";
import { formatPaletteExport, paletteExportFormats } from "../src/lib/art2pal/export";
import { safeCopyText } from "../src/lib/art2pal/clipboard";
import {
  colorVisionModes,
  evaluatePaletteColorblindAccessibility,
  simulateColorVisionDeficiency,
  simulatePaletteColorVision,
} from "../src/lib/color-vision";
import {
  calculateGrayscaleContrast,
  getGrayscaleContrastReport,
  rgbToGrayscaleLuminance,
} from "../src/lib/grayscale-contrast";
import { createAdobeAseBuffer, createAdobeAseFilename } from "../src/lib/adobe-ase";
import {
  getPaletteRecommendations,
  recommendationPresets,
} from "../src/lib/palette-recommendations";
import { comparePalettes } from "../src/lib/palette-comparison";
import {
  createPaletteFingerprint,
  findPaletteDuplicates,
  getPaletteColorDistance,
  normalizePaletteColor,
} from "../src/lib/palette-deduplication";
import { getPaletteSimilarityScore } from "../src/lib/palette-utils";
import { extractCandidateColors } from "../src/lib/art2pal/palette/extractCandidateColors";
import {
  getResizeDimensions,
  isSupportedImage,
  sampleImageData,
} from "../src/lib/art2pal/image";
import {
  generateArt2PalPalettes,
  generateCategoricalPalette,
  generateDivergingPalette,
  generateNeutralPalette,
  generateSequentialPalette,
} from "../src/lib/art2pal/palette/generatePalettes";
import { kMeansOklab } from "../src/lib/art2pal/palette/kMeans";
import type { CandidateColor, CandidateColorSet } from "../src/lib/art2pal/palette/types";
import type { Palette } from "../src/lib/types";
import { siteConfig } from "../src/lib/site";
import { createPaletteId, paletteRouteKeys, palettes, paletteSources } from "../src/lib/palettes";

function candidateFromHex(hex: string, overrides: Partial<CandidateColor> = {}): CandidateColor {
  const rgb = hexToRgb(hex);
  const lch = rgbToOklch(rgb);

  return {
    center: rgbToOklab(rgb),
    rgb,
    hex,
    count: 1,
    weight: 1,
    lightness: lch.L,
    chroma: lch.C,
    hue: lch.h,
    contrastWithWhite: calculateContrastRatio(rgb),
    pool: "neutral",
    ...overrides,
  };
}

function paletteFixture(overrides: Partial<Palette> & Pick<Palette, "name" | "colors">): Palette {
  const { id: overrideId, name, colors, ...rest } = overrides;
  const colorblindReport = evaluatePaletteColorblindAccessibility(colors);
  const id = overrideId ?? name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return {
    id,
    name,
    description: rest.description ?? "Test palette",
    category: "sequential",
    colors,
    recommendedFor: ["heatmap"],
    tags: ["sequential", "continuous"],
    colorblindSafe: colorblindReport.safe,
    colorblindScore: colorblindReport.score,
    colorblindReport,
    background: "white",
    ...rest,
  };
}

test("converts between RGB, HEX, OKLab, and OKLCH with stable round trips", () => {
  const rgb = { r: 66, g: 125, b: 97 };
  const hex = rgbToHex(rgb);

  assert.equal(hex, "#427d61");
  assert.deepEqual(hexToRgb(hex), rgb);

  const lab = rgbToOklab(rgb);
  const lch = rgbToOklch(rgb);
  const roundTrip = oklchToRgb(lch);

  assert.ok(lab.L > 0 && lab.L < 1);
  assert.ok(lch.C > 0);
  assert.ok(Math.abs(roundTrip.r - rgb.r) <= 2);
  assert.ok(Math.abs(roundTrip.g - rgb.g) <= 2);
  assert.ok(Math.abs(roundTrip.b - rgb.b) <= 2);
});

test("calculates perceptual distance and white-background contrast", () => {
  const red = rgbToOklab({ r: 190, g: 65, b: 65 });
  const blue = rgbToOklab({ r: 56, g: 105, b: 180 });

  assert.ok(oklabDistance(red, blue) > 0.15);
  assert.ok(calculateContrastRatio({ r: 40, g: 60, b: 70 }, { r: 255, g: 255, b: 255 }) > 8);
  assert.ok(calculateContrastRatio({ r: 235, g: 235, b: 230 }, { r: 255, g: 255, b: 255 }) < 1.4);
});

test("clusters sampled pixels in OKLab space and records cluster weights", () => {
  const pixels = [
    ...Array.from({ length: 18 }, () => ({ r: 190, g: 70, b: 62 })),
    ...Array.from({ length: 12 }, () => ({ r: 52, g: 105, b: 160 })),
    ...Array.from({ length: 9 }, () => ({ r: 70, g: 132, b: 92 })),
  ];

  const clusters = kMeansOklab(pixels, { k: 3, maxIterations: 20, seed: 12 });

  assert.equal(clusters.length, 3);
  assert.equal(clusters.reduce((sum, cluster) => sum + cluster.count, 0), pixels.length);
  assert.ok(clusters.every((cluster) => cluster.hex.startsWith("#")));
  assert.ok(clusters.every((cluster) => cluster.lightness === cluster.lch.L));
  assert.ok(clusters.every((cluster) => cluster.chroma === cluster.lch.C));
  assert.ok(clusters.every((cluster) => cluster.hue === cluster.lch.h));
  assert.ok(clusters[0].weight >= clusters[1].weight);
});

test("extracts candidate colors with main and neutral pools", () => {
  const pixels = [
    ...Array.from({ length: 20 }, () => ({ r: 176, g: 83, b: 72 })),
    ...Array.from({ length: 20 }, () => ({ r: 64, g: 114, b: 154 })),
    ...Array.from({ length: 20 }, () => ({ r: 95, g: 130, b: 88 })),
    ...Array.from({ length: 8 }, () => ({ r: 204, g: 201, b: 192 })),
  ];

  const candidates = extractCandidateColors(pixels, { k: 8, seed: 2 });

  assert.ok(candidates.all.length >= 4);
  assert.ok(candidates.main.length >= 3);
  assert.ok(candidates.neutral.length >= 1);
  assert.ok(candidates.main.every((candidate) => candidate.contrastWithWhite >= 1.8));
});

test("prepares browser-local images with the requested format and sampling limits", () => {
  assert.deepEqual(getResizeDimensions(2048, 1024), { width: 512, height: 256, wasResized: true });
  assert.deepEqual(getResizeDimensions(300, 240), { width: 300, height: 240, wasResized: false });

  assert.equal(isSupportedImage({ type: "image/png" } as File), true);
  assert.equal(isSupportedImage({ type: "image/jpeg" } as File), true);
  assert.equal(isSupportedImage({ type: "image/webp" } as File), true);
  assert.equal(isSupportedImage({ type: "", name: "painting.JPG" } as File), true);
  assert.equal(isSupportedImage({ type: "", name: "canvas.webp" } as File), true);
  assert.equal(isSupportedImage({ type: "image/gif" } as File), false);
  assert.equal(isSupportedImage({ type: "image/bmp" } as File), false);

  const data = new Uint8ClampedArray(20 * 4);
  for (let index = 0; index < 20; index += 1) {
    data[index * 4] = index;
    data[index * 4 + 1] = index + 20;
    data[index * 4 + 2] = index + 40;
    data[index * 4 + 3] = 255;
  }

  const sampled = sampleImageData(data, 20, 1, 5, 9);

  assert.equal(sampled.length, 5);
  assert.notDeepEqual(sampled, [
    { r: 0, g: 20, b: 40 },
    { r: 1, g: 21, b: 41 },
    { r: 2, g: 22, b: 42 },
    { r: 3, g: 23, b: 43 },
    { r: 4, g: 24, b: 44 },
  ]);
});

test("generates categorical palettes from representative but distinct source colors", () => {
  const candidates = extractCandidateColors(
    [
      ...Array.from({ length: 20 }, () => ({ r: 178, g: 73, b: 68 })),
      ...Array.from({ length: 18 }, () => ({ r: 56, g: 112, b: 164 })),
      ...Array.from({ length: 16 }, () => ({ r: 83, g: 132, b: 83 })),
      ...Array.from({ length: 14 }, () => ({ r: 191, g: 145, b: 63 })),
      ...Array.from({ length: 12 }, () => ({ r: 126, g: 93, b: 154 })),
      ...Array.from({ length: 10 }, () => ({ r: 198, g: 117, b: 77 })),
      ...Array.from({ length: 8 }, () => ({ r: 74, g: 146, b: 143 })),
      ...Array.from({ length: 6 }, () => ({ r: 142, g: 94, b: 74 })),
    ],
    { k: 12, seed: 4 }
  );

  const palette = generateCategoricalPalette(candidates, { count: 6, seed: 5 });

  assert.equal(palette.length, 6);
  assert.equal(new Set(palette).size, 6);
  assert.ok(palette.every((color) => /^#[0-9a-f]{6}$/i.test(color)));
});

test("does not pad generated categorical palettes with unrelated fallback colors", () => {
  const candidates: CandidateColorSet = {
    all: [
      candidateFromHex("#5c7b24", { weight: 0.2, pool: "main" }),
      candidateFromHex("#86c5f0", { weight: 0.18, pool: "main" }),
      candidateFromHex("#264b19", { weight: 0.16, pool: "main" }),
      candidateFromHex("#516e8b", { weight: 0.14, pool: "main" }),
      candidateFromHex("#a0bd3e", { weight: 0.12, pool: "main" }),
      candidateFromHex("#3b5e52", { weight: 0.1, pool: "main" }),
      candidateFromHex("#8b9866", { weight: 0.06, pool: "main" }),
      candidateFromHex("#c2d66b", { weight: 0.04, pool: "main" }),
    ],
    main: [],
    neutral: [],
    rejected: [],
  };
  candidates.main = candidates.all;

  const palette = generateCategoricalPalette(candidates, { count: 12, seed: 5 });
  const sourceColors = new Set(candidates.all.map((candidate) => candidate.hex));
  const fallbackColors = new Set(["#4e79a7", "#f28e2b", "#59a14f", "#e15759", "#76b7b2", "#edc948", "#b07aa1", "#9c755f"]);

  assert.equal(palette.length, 12);
  assert.ok([...sourceColors].every((color) => palette.includes(color)), "source image candidates should be preserved before deriving extras");
  assert.ok(palette.every((color) => !fallbackColors.has(color)), "generated categorical colors must not be padded with unrelated fallback colors");
  assert.equal(new Set(palette).size, palette.length);
});

test("generates monotonic sequential and neutral-centered diverging palettes", () => {
  const candidates = extractCandidateColors(
    [
      ...Array.from({ length: 20 }, () => ({ r: 170, g: 78, b: 68 })),
      ...Array.from({ length: 20 }, () => ({ r: 48, g: 105, b: 155 })),
      ...Array.from({ length: 14 }, () => ({ r: 205, g: 199, b: 185 })),
    ],
    { k: 8, seed: 9 }
  );

  const sequential = generateSequentialPalette(candidates, { count: 6 });
  const diverging = generateDivergingPalette(candidates, { count: 7 });

  const sequentialLightness = sequential.map((hex) => rgbToOklch(hexToRgb(hex)).L);

  assert.equal(sequential.length, 6);
  assert.ok(sequentialLightness.every((lightness, index) => index === 0 || lightness < sequentialLightness[index - 1]));
  assert.equal(diverging.length, 7);
  assert.ok(rgbToOklch(hexToRgb(diverging[3])).C < 0.04);
});

test("falls back for diverging palettes when source hues are too similar", () => {
  const candidates: CandidateColorSet = {
    all: [
      candidateFromHex("#b45b47", { weight: 0.5, pool: "main" }),
      candidateFromHex("#a8644a", { weight: 0.3, pool: "main" }),
      candidateFromHex("#965e49", { weight: 0.2, pool: "main" }),
    ],
    main: [],
    neutral: [],
    rejected: [],
  };

  candidates.main = candidates.all;

  const diverging = generateDivergingPalette(candidates, { count: 7 });

  assert.deepEqual(diverging, ["#315b8c", "#6f90b8", "#bac8d5", "#f3f1ea", "#d9b7a2", "#b87657", "#8f3c2f"]);
});

test("generates neutral palettes as background, surface, grid, axis, and text roles", () => {
  const darkNeutral = candidateFromHex("#996955");
  const candidates: CandidateColorSet = {
    all: [darkNeutral],
    main: [],
    neutral: [darkNeutral],
    rejected: [],
  };

  const neutral = generateNeutralPalette(candidates);
  const lightness = neutral.map((hex) => rgbToOklch(hexToRgb(hex)).L);
  const chroma = neutral.map((hex) => rgbToOklch(hexToRgb(hex)).C);

  assert.equal(neutral.length, 5);
  assert.ok(lightness[0] > 0.92);
  assert.ok(lightness[1] > 0.85);
  assert.ok(lightness[2] > 0.65);
  assert.ok(lightness[3] > 0.4 && lightness[3] < 0.75);
  assert.ok(lightness[4] < 0.38);
  assert.ok(lightness.every((value, index) => index === 0 || value < lightness[index - 1]));
  assert.ok(chroma.every((value) => value < 0.04));
  assert.ok(calculateContrastRatio(hexToRgb(neutral[4])) >= 8);
});

test("falls back to complete scientific palettes when image colors are insufficient", () => {
  const result = generateArt2PalPalettes([{ r: 245, g: 244, b: 240 }], { categoricalCount: 8, seed: 1 });

  assert.equal(result.status, "fallback");
  assert.equal(result.categorical.colors.length, 8);
  assert.equal(result.sequential.colors.length, 6);
  assert.equal(result.diverging.colors.length, 7);
  assert.equal(result.neutral.colors.length, 5);
  assert.ok(result.messages.length > 0);
});

test("assigns stable internal palette ids from palette kind and colors", () => {
  const pixels = [
    ...Array.from({ length: 20 }, () => ({ r: 178, g: 73, b: 68 })),
    ...Array.from({ length: 18 }, () => ({ r: 56, g: 112, b: 164 })),
    ...Array.from({ length: 16 }, () => ({ r: 83, g: 132, b: 83 })),
    ...Array.from({ length: 14 }, () => ({ r: 191, g: 145, b: 63 })),
  ];

  const first = generateArt2PalPalettes(pixels, { categoricalCount: 8, seed: 3 });
  const second = generateArt2PalPalettes(pixels, { categoricalCount: 8, seed: 3 });
  const shorter = generateArt2PalPalettes(pixels, { categoricalCount: 4, seed: 3 });

  assert.match(first.categorical.id, /^a2p-cat-[0-9a-z]{14}$/);
  assert.ok(first.categorical.id.length <= 24);
  assert.equal(first.categorical.id, second.categorical.id);
  assert.notEqual(first.categorical.id, shorter.categorical.id);
  assert.equal(new Set([first.categorical.id, first.sequential.id, first.diverging.id, first.neutral.id]).size, 4);
});

test("formats palette exports for common scientific workflows", () => {
  const colors = ["#123456", "#abcdef", "#e07a5f"];

  assert.equal(formatPaletteExport(colors, "hex"), "#123456, #abcdef, #e07a5f");
  assert.match(formatPaletteExport(colors, "json"), /"#abcdef"/);
  assert.match(formatPaletteExport(colors, "css"), /--color-2: #abcdef;/);
  assert.equal(formatPaletteExport(colors, "python"), 'palette = ["#123456", "#abcdef", "#e07a5f"]');
  assert.match(formatPaletteExport(colors, "r"), /scale_color_manual\(values = c\("#123456", "#abcdef", "#e07a5f"\)\)/);
  assert.match(formatPaletteExport(colors, "r"), /scale_fill_manual\(values = c\("#123456", "#abcdef", "#e07a5f"\)\)/);

  const contribution = JSON.parse(
    formatPaletteExport(colors, "scipalette-json", {
      kind: "categorical",
      name: "Categorical",
      usage: "UMAP, t-SNE, cell types, groups",
      description: "Distinct source image colors.",
    })
  );

  assert.equal(contribution.name, "Your Palette Name");
  assert.equal(Object.hasOwn(contribution, "id"), false);
  assert.equal(Object.hasOwn(contribution, "uid"), false);
  assert.equal(Object.hasOwn(contribution, "colorblindSafe"), false);
  assert.equal(contribution.category, "categorical");
  assert.deepEqual(contribution.colors, colors);
  assert.deepEqual(contribution.recommendedFor, ["umap", "scatter"]);
  assert.deepEqual(contribution.tags, ["art2pal", "categorical"]);
  assert.equal(contribution.source, "Generated locally with Art2Pal");
  assert.ok(paletteExportFormats.some((option) => option.value === "scipalette-json" && option.label === "SciPalette contribution JSON"));
});

test("copy helper reports success and failure without throwing", async () => {
  const writes: string[] = [];
  const success = await safeCopyText("#123456", {
    clipboard: {
      writeText: async (value: string) => {
        writes.push(value);
      },
    },
  });
  const failure = await safeCopyText("#abcdef", {
    clipboard: {
      writeText: async () => {
        throw new Error("denied");
      },
    },
  });

  assert.equal(success, true);
  assert.equal(failure, false);
  assert.deepEqual(writes, ["#123456"]);
});

test("simulates color vision deficiencies for HEX palettes", () => {
  assert.deepEqual(
    colorVisionModes.map((mode) => mode.id),
    ["normal", "protanopia", "deuteranopia", "tritanopia"]
  );

  assert.equal(simulateColorVisionDeficiency("#4F6D5F", "normal"), "#4f6d5f");
  assert.equal(simulatePaletteColorVision(["#ff0000", "#00ff00"], "protanopia").length, 2);

  const protanRed = hexToRgb(simulateColorVisionDeficiency("#ff0000", "protanopia"));
  const originalRed = hexToRgb("#ff0000");

  assert.ok(protanRed.r < originalRed.r);
  assert.ok(protanRed.g > originalRed.g);
  assert.ok(simulateColorVisionDeficiency("#abcdef", "deuteranopia").startsWith("#"));
  assert.ok(simulateColorVisionDeficiency("#abcdef", "tritanopia").startsWith("#"));
});

test("calculates colorblind accessibility scores and automatic safe classifications", () => {
  const okabeItoReport = evaluatePaletteColorblindAccessibility([
    "#E69F00",
    "#56B4E9",
    "#009E73",
    "#F0E442",
    "#0072B2",
    "#D55E00",
    "#CC79A7",
    "#000000",
  ]);
  const highRiskReport = evaluatePaletteColorblindAccessibility(["#FF0000", "#00FF00", "#0000FF", "#FFFF00"]);

  assert.equal(okabeItoReport.safe, true);
  assert.equal(okabeItoReport.level, "safe");
  assert.ok(okabeItoReport.score >= okabeItoReport.thresholds.safeScore);
  assert.ok(okabeItoReport.minimumDistance >= okabeItoReport.thresholds.safeMinimumDistance);
  assert.ok(okabeItoReport.modes.every((mode) => mode.pairCount > 0));
  assert.equal(okabeItoReport.failingPairs.length, 0);

  assert.equal(highRiskReport.safe, false);
  assert.ok(["caution", "unsafe"].includes(highRiskReport.level));
  assert.ok(highRiskReport.score < highRiskReport.thresholds.safeScore);
  assert.ok(highRiskReport.failingPairs.length > 0);
});

test("checks grayscale contrast for scientific palette separability", () => {
  assert.equal(rgbToGrayscaleLuminance("#000000"), 0);
  assert.equal(rgbToGrayscaleLuminance("#ffffff"), 255);
  assert.ok(calculateGrayscaleContrast("#000000", "#ffffff") >= 20);
  assert.ok(calculateGrayscaleContrast("#777777", "#808080") < 1.2);

  const report = getGrayscaleContrastReport(["#000000", "#777777", "#808080"], 2);

  assert.equal(report.pairs.length, 3);
  assert.equal(report.failingPairs.length, 1);
  assert.equal(report.passes, false);
  assert.ok(report.minimumRatio < 2);
});

test("creates Adobe ASE files for palette exchange", () => {
  const buffer = createAdobeAseBuffer(["#123456", "#abcdef"], "My Palette");
  const bytes = new Uint8Array(buffer);
  const signature = String.fromCharCode(...bytes.slice(0, 4));
  const blockCount = new DataView(buffer).getUint32(8, false);

  assert.equal(signature, "ASEF");
  assert.equal(blockCount, 4);
  assert.ok(bytes.length > 80);
  assert.equal(createAdobeAseFilename("My Palette / Test"), "my-palette-test.ase");
});

test("recommends palettes from local scientific intent signals", () => {
  const umap = getPaletteRecommendations({
    plotType: "umap",
    category: "categorical",
    colorCount: "9-12",
    colorblindOnly: true,
    background: "white",
    intent: "single-cell cluster annotation",
  });

  assert.ok(umap.length >= 3);
  assert.equal(umap[0].palette.category, "categorical");
  assert.ok(umap[0].palette.recommendedFor.includes("umap"));
  assert.ok(umap[0].palette.colorblindSafe);
  assert.ok(umap[0].reasons.some((reason) => reason.includes("UMAP")));
  assert.ok(umap[0].score > umap[umap.length - 1].score);

  const heatmap = getPaletteRecommendations(recommendationPresets.expressionHeatmap);

  assert.ok(heatmap[0].palette.recommendedFor.includes("heatmap"));
  assert.ok(["sequential", "heatmap", "diverging"].includes(heatmap[0].palette.category));
  assert.ok(heatmap[0].reasons.length >= 2);
});

test("compares palettes by overlap, use cases, and grayscale contrast", () => {
  const first = palettes.find((palette) => palette.name === "Cell Atlas 12");
  const second = palettes.find((palette) => palette.name === "Immunology Cell Types");

  assert.ok(first);
  assert.ok(second);

  const comparison = comparePalettes(first, second);

  assert.equal(comparison.left.name, "Cell Atlas 12");
  assert.equal(comparison.right.name, "Immunology Cell Types");
  assert.ok(comparison.sharedPlotTypes.includes("umap"));
  assert.ok(comparison.colorCountDelta > 0);
  assert.ok(comparison.leftOnlyColors.length > 0);
  assert.ok(comparison.rightOnlyColors.length > 0);
  assert.ok(comparison.grayscale.left.minimumRatio > 0);
  assert.ok(comparison.summary.length >= 2);
});

test("scores similar palettes with both metadata fit and perceptual color similarity", () => {
  const target = paletteFixture({
    name: "Target Blue Green Sequential",
    colors: ["#153a5b", "#2f6f73", "#8abf8a"],
    tags: ["sequential", "continuous", "publication"],
  });
  const colorNeighbor = paletteFixture({
    name: "Nearby Blue Green Sequential",
    colors: ["#173b5e", "#317275", "#88bd87"],
    tags: ["sequential", "continuous", "publication"],
  });
  const metadataNeighbor = paletteFixture({
    name: "Distant Purple Sequential",
    colors: ["#3a115f", "#8b1b8e", "#ef9a3a"],
    tags: ["sequential", "continuous", "publication"],
  });

  const nearbyScore = getPaletteSimilarityScore(target, colorNeighbor);
  const distantScore = getPaletteSimilarityScore(target, metadataNeighbor);

  assert.ok(nearbyScore.color > distantScore.color);
  assert.ok(nearbyScore.total > distantScore.total);
});

test("keeps similar palette scoring anchored to use-case metadata", () => {
  const target = paletteFixture({
    name: "Target Heatmap",
    colors: ["#153a5b", "#2f6f73", "#8abf8a"],
    category: "sequential",
    recommendedFor: ["heatmap", "scatter"],
    tags: ["sequential", "continuous", "publication"],
  });
  const sameUseDifferentColor = paletteFixture({
    name: "Same Use Different Color",
    colors: ["#4a164e", "#9a2f61", "#e6a34b"],
    category: "sequential",
    recommendedFor: ["heatmap", "scatter"],
    tags: ["sequential", "continuous", "publication"],
  });
  const colorOnlyMatch = paletteFixture({
    name: "Color Only Match",
    colors: ["#153a5b", "#2f6f73", "#8abf8a"],
    category: "categorical",
    recommendedFor: ["bar"],
    tags: ["clinical"],
  });

  const sameUseScore = getPaletteSimilarityScore(target, sameUseDifferentColor);
  const colorOnlyScore = getPaletteSimilarityScore(target, colorOnlyMatch);

  assert.ok(colorOnlyScore.color > sameUseScore.color);
  assert.ok(sameUseScore.total > colorOnlyScore.total);
});

test("normalizes palette colors and creates order-aware fingerprints", () => {
  assert.equal(normalizePaletteColor(" abc "), "#aabbcc");
  assert.equal(normalizePaletteColor("#ABCDEF"), "#abcdef");

  const ordered = createPaletteFingerprint(["#ABCDEF", "#123456"], { ignoreOrder: false });
  const reordered = createPaletteFingerprint(["#123456", "#abcdef"], { ignoreOrder: false });
  const unordered = createPaletteFingerprint(["#ABCDEF", "#123456"], { ignoreOrder: true });
  const unorderedReversed = createPaletteFingerprint(["#123456", "#abcdef"], { ignoreOrder: true });

  assert.equal(ordered, "#abcdef|#123456");
  assert.notEqual(ordered, reordered);
  assert.equal(unordered, unorderedReversed);
});

test("detects exact, order-insensitive, and near-duplicate palettes", () => {
  const base = paletteFixture({
    id: "base",
    name: "Base",
    colors: ["#153a5b", "#2f6f73", "#8abf8a"],
  });
  const exact = paletteFixture({
    id: "exact",
    name: "Exact",
    colors: ["#153A5B", "#2F6F73", "#8ABF8A"],
  });
  const secondExact = paletteFixture({
    id: "second-exact",
    name: "Second Exact",
    colors: ["#153a5b", "#2f6f73", "#8abf8a"],
  });
  const reordered = paletteFixture({
    id: "reordered",
    name: "Reordered",
    colors: ["#8abf8a", "#153a5b", "#2f6f73"],
  });
  const near = paletteFixture({
    id: "near",
    name: "Near",
    colors: ["#163b5c", "#317174", "#89be89"],
  });
  const distant = paletteFixture({
    id: "distant",
    name: "Distant",
    colors: ["#5a174e", "#b84b4c", "#f2c35c"],
  });

  const report = findPaletteDuplicates([base, exact, secondExact, reordered, near, distant], {
    nearDuplicateDistance: 0.035,
  });

  assert.deepEqual(
    report.exact.map((pair) => pair.ids),
    [
      ["base", "exact"],
      ["base", "second-exact"],
    ]
  );
  assert.deepEqual(
    report.orderInsensitive.map((pair) => pair.ids),
    [["base", "reordered"]]
  );
  assert.deepEqual(
    report.near.map((pair) => pair.ids),
    [["base", "near"]]
  );
  assert.ok(getPaletteColorDistance(base.colors, near.colors) < 0.035);
  assert.ok(getPaletteColorDistance(base.colors, distant.colors) > 0.035);
});

test("curated palettes do not contain blocking duplicate color systems", () => {
  const report = findPaletteDuplicates(palettes);

  assert.deepEqual(report.exact, []);
  assert.deepEqual(report.orderInsensitive, []);
});

test("research expansion contributes exactly fifty sourced palettes", () => {
  const expansion = palettes.filter((palette) => palette.source?.includes("Original SciPalette research expansion"));
  const expansionFiles = readdirSync("src/lib/palettes").filter((file) => {
    if (!file.endsWith(".ts") || file === "index.ts") return false;
    const source = readFileSync(`src/lib/palettes/${file}`, "utf8");
    return source.includes("Original SciPalette research expansion");
  });

  assert.equal(expansion.length, 50);
  assert.equal(expansionFiles.length, 50);
  assert.ok(expansion.every((palette) => palette.source));
  assert.ok(expansion.some((palette) => palette.category === "categorical"));
  assert.ok(expansion.some((palette) => palette.category === "sequential"));
  assert.ok(expansion.some((palette) => palette.category === "diverging"));
  assert.ok(expansion.some((palette) => palette.category === "heatmap"));

  const duplicateReport = findPaletteDuplicates(expansion, { nearDuplicateDistance: 0.025 });
  assert.deepEqual(duplicateReport.exact, []);
  assert.deepEqual(duplicateReport.orderInsensitive, []);
  assert.deepEqual(duplicateReport.near, []);
});

test("uses custom-domain root paths for deployed assets and links", () => {
  const astroConfig = readFileSync("astro.config.ts", "utf8");
  const baseLayout = readFileSync("src/layouts/BaseLayout.astro", "utf8");
  const paletteCard = readFileSync("src/components/PaletteCard.tsx", "utf8");
  const contributing = readFileSync("CONTRIBUTING.md", "utf8");
  const architecture = readFileSync("docs/ARCHITECTURE.md", "utf8");

  assert.equal(siteConfig.basePath, "");
  assert.ok(!astroConfig.includes('base: "/SciPalette"'));
  assert.ok(!baseLayout.includes("/SciPalette/"));
  assert.ok(!paletteCard.includes("/SciPalette/"));
  assert.ok(!contributing.includes("http://localhost:4321/SciPalette/"));
  assert.ok(!contributing.includes('base: "/SciPalette"'));
  assert.ok(!architecture.includes("GitHub Pages base path"));
  assert.ok(baseLayout.includes('src="https://track.fantasticjoe.com/script.js"'));
  assert.ok(baseLayout.includes('data-website-id="ff401d40-86b3-480c-a3d7-6202d62d1cc5"'));
  assert.ok(baseLayout.includes("is:inline"));
});

test("curated palette source files keep ids implicit and generated ids stable", () => {
  const paletteFiles = readdirSync("src/lib/palettes").filter((file) => file.endsWith(".ts") && file !== "index.ts");
  const paletteFileKeys = new Set(paletteFiles.map((file) => file.replace(/\.ts$/, "")));
  const ids = palettes.map((palette) => palette.id);

  assert.equal(paletteSources.length, paletteFiles.length);
  assert.equal(paletteRouteKeys.length, paletteFiles.length);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(new Set(paletteRouteKeys).size, paletteRouteKeys.length);

  for (const key of paletteRouteKeys) {
    assert.ok(paletteFileKeys.has(key), `${key} should match a palette source file`);
  }

  for (const file of paletteFiles) {
    const source = readFileSync(`src/lib/palettes/${file}`, "utf8");
    assert.ok(!source.includes("id:"), `${file} should not define an explicit id`);
    assert.ok(!source.includes("colorblindSafe:"), `${file} should not define manual colorblind safety`);
    assert.ok(source.includes("satisfies PaletteSource"), `${file} should satisfy PaletteSource`);
  }

  for (const palette of palettes) {
    assert.match(palette.id, /^sp-[0-9a-z]{12}$/);
    assert.ok(palette.id.length <= 15);
    assert.equal(typeof palette.colorblindScore, "number");
    assert.ok(palette.colorblindScore >= 0 && palette.colorblindScore <= 100);
    assert.equal(palette.colorblindSafe, palette.colorblindReport.safe);
    assert.equal(palette.colorblindScore, palette.colorblindReport.score);
  }

  assert.equal(palettes[0].id, createPaletteId(paletteRouteKeys[0]));
  assert.notEqual(createPaletteId(paletteRouteKeys[0]), createPaletteId(paletteRouteKeys[1]));
});

test("palette submissions do not ask contributors to self-certify colorblind safety", () => {
  const issueTemplate = readFileSync(".github/ISSUE_TEMPLATE/palette_request.yml", "utf8");
  const pullRequestTemplate = readFileSync(".github/PULL_REQUEST_TEMPLATE.md", "utf8");
  const contributionPanel = readFileSync("src/components/PaletteContributionPanel.astro", "utf8");
  const contributing = readFileSync("CONTRIBUTING.md", "utf8");
  const readme = readFileSync("README.md", "utf8");
  const readmeEn = readFileSync("README.en.md", "utf8");
  const architecture = readFileSync("docs/ARCHITECTURE.md", "utf8");

  assert.ok(!issueTemplate.includes("Colorblind-safe?"));
  assert.ok(!issueTemplate.includes("是否色盲友好"));
  assert.ok(issueTemplate.includes("色盲友好备注 / Colorblind accessibility notes"));
  assert.ok(issueTemplate.includes("automatically calculate"));
  assert.ok(!pullRequestTemplate.includes("`colorblindSafe`"));
  assert.ok(!contributionPanel.includes('"colorblindSafe"'));
  assert.ok(contributionPanel.includes("automatically calculates colorblind accessibility"));
  assert.ok(!contributing.includes("colorblindSafe: true"));
  assert.ok(contributing.includes("colorblind score"));
  assert.ok(readme.includes("colorblindScore"));
  assert.ok(readmeEn.includes("colorblindScore"));
  assert.ok(architecture.includes("automatic colorblind accessibility score"));
});

test("workflow actions stay on current Node-backed releases", () => {
  const ci = readFileSync(".github/workflows/ci.yml", "utf8");
  const deploy = readFileSync(".github/workflows/deploy.yml", "utf8");
  const release = readFileSync(".github/workflows/release.yml", "utf8");
  const workflows = `${ci}\n${deploy}\n${release}`;

  assert.ok(!workflows.includes("actions/checkout@v4"));
  assert.ok(!workflows.includes("actions/setup-node@v4"));
  assert.ok(!workflows.includes("actions/configure-pages@v4"));
  assert.ok(!workflows.includes("actions/upload-pages-artifact@v3"));
  assert.ok(!workflows.includes("actions/deploy-pages@v4"));
});

test("Art2Pal shows palettes before all scientific previews", () => {
  const tool = readFileSync("src/components/art2pal/Art2PalPaletteTool.tsx", "utf8");
  const preview = readFileSync("src/components/art2pal/ScientificPreview.tsx", "utf8");
  const paletteSection = readFileSync("src/components/art2pal/PaletteSection.tsx", "utf8");
  const paletteCard = readFileSync("src/components/PaletteCard.tsx", "utf8");
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

  assert.ok(tool.indexOf("<ImageUploader") < tool.indexOf("<ParameterPanel"));
  assert.ok(tool.indexOf("<ParameterPanel") < tool.indexOf("<PaletteSection"));
  assert.ok(tool.indexOf("<PaletteSection") < tool.indexOf("<ScientificPreview"));
  assert.ok(!tool.includes("previewType"));
  assert.ok(!tool.includes("setPreviewType"));
  assert.ok(!preview.includes("<select"));
  assert.ok(!preview.includes("onPreviewTypeChange"));
  assert.ok(packageJson.dependencies.d3);
  assert.ok(preview.includes('from "d3"'));
  assert.ok(preview.includes("d3.scaleLinear"));
  assert.ok(preview.includes("d3.line"));
  assert.ok(preview.includes("d3.area"));
  assert.ok(preview.includes("<UmapPreview palettes={palettes} />"));
  assert.ok(preview.includes("<HeatmapPreview palettes={palettes} />"));
  assert.ok(preview.includes("<DensityPreview palettes={palettes} />"));
  assert.ok(preview.includes("<BarPreview palettes={palettes} />"));
  assert.ok(paletteSection.includes("whitespace-nowrap"));
  assert.ok(paletteCard.includes("whitespace-nowrap"));
});

test("Art2Pal categorical count changes automatically recalculate palettes from the image", () => {
  const tool = readFileSync("src/components/art2pal/Art2PalPaletteTool.tsx", "utf8");
  const handlerStart = tool.indexOf("const handleCategoricalCountChange");
  const handlerEnd = tool.indexOf("const regenerate", handlerStart);
  const handler = tool.slice(handlerStart, handlerEnd);

  assert.ok(handler.includes("calculatePalettes(image.pixels, nextCount"));
  assert.ok(!handler.includes("generateCategoricalPalette(palettes.candidates"));
  assert.ok(!handler.includes("setPalettes({"));
});

test("palette detail plot previews are rebuilt with D3 scales and shapes", () => {
  const plotPreview = readFileSync("src/components/PlotPreview.tsx", "utf8");
  const codeExport = readFileSync("src/components/CodeExport.tsx", "utf8");
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));

  assert.ok(packageJson.dependencies.d3);
  assert.ok(packageJson.devDependencies["@types/d3"]);
  assert.ok(plotPreview.includes('from "d3"'));
  assert.ok(plotPreview.includes("d3.scaleLinear"));
  assert.ok(plotPreview.includes("d3.scaleBand"));
  assert.ok(plotPreview.includes("d3.line"));
  assert.ok(plotPreview.includes("d3.area"));
  assert.ok(codeExport.includes("Download ASE"));
  assert.ok(codeExport.includes("createAdobeAseBuffer"));
});

test("site separates homepage showcase from full palette browser route", () => {
  const homePage = readFileSync("src/pages/index.astro", "utf8");
  const palettesPage = readFileSync("src/pages/palettes/index.astro", "utf8");
  const recommendPage = readFileSync("src/pages/recommend/index.astro", "utf8");
  const comparePage = readFileSync("src/pages/compare/index.astro", "utf8");
  const contributePage = readFileSync("src/pages/contribute/index.astro", "utf8");
  const detailPage = readFileSync("src/pages/palettes/[id].astro", "utf8");
  const colorVisionPreview = readFileSync("src/components/ColorVisionPreview.tsx", "utf8");
  const grayscaleContrastPanel = readFileSync("src/components/GrayscaleContrastPanel.tsx", "utf8");
  const contributionPanel = readFileSync("src/components/PaletteContributionPanel.astro", "utf8");
  const paperInspirationPanel = readFileSync("src/components/PaperInspirationPanel.astro", "utf8");
  const recommendationPanel = readFileSync("src/components/PaletteRecommendationPanel.tsx", "utf8");
  const comparisonPanel = readFileSync("src/components/PaletteComparisonPanel.tsx", "utf8");
  const browser = readFileSync("src/components/PaletteBrowser.tsx", "utf8");
  const featured = readFileSync("src/components/FeaturedPaletteSections.tsx", "utf8");
  const site = readFileSync("src/lib/site.ts", "utf8");
  const paletteRequest = readFileSync(".github/ISSUE_TEMPLATE/palette_request.yml", "utf8");
  const paperInspiration = readFileSync(".github/ISSUE_TEMPLATE/paper_inspiration.yml", "utf8");
  const readme = readFileSync("README.md", "utf8");
  const readmeEn = readFileSync("README.en.md", "utf8");
  const architecture = readFileSync("docs/ARCHITECTURE.md", "utf8");

  assert.ok(homePage.includes("<PaletteShowcase"));
  assert.ok(!homePage.includes("<PaletteBrowser"));
  assert.ok(palettesPage.includes("<PaletteBrowser"));
  assert.ok(!palettesPage.includes("<PaletteContributionPanel"));
  assert.ok(!palettesPage.includes("<PaperInspirationPanel"));
  assert.ok(!palettesPage.includes("<PaletteRecommendationPanel"));
  assert.ok(!palettesPage.includes("<PaletteComparisonPanel"));
  assert.ok(browser.includes("<PaletteLibrarySection"));
  assert.ok(!browser.includes("<PaletteRecommendationPanel"));
  assert.ok(!browser.includes("<PaletteComparisonPanel"));
  assert.ok(recommendPage.includes("<PaletteRecommendationPanel client:load"));
  assert.ok(comparePage.includes("<PaletteComparisonPanel client:load"));
  assert.ok(contributePage.includes("<PaletteContributionPanel"));
  assert.ok(contributePage.includes("<PaperInspirationPanel"));
  assert.ok(recommendationPanel.includes("getPaletteRecommendations"));
  assert.ok(comparisonPanel.includes("Palette comparison"));
  assert.ok(comparisonPanel.includes("comparePalettes"));
  assert.ok(!featured.includes("<PaletteGrid"));
  assert.ok(!featured.includes("CopyButton"));
  assert.ok(!featured.includes("generatePythonCode"));
  assert.ok(site.includes('href: "/palettes/"'));
  assert.ok(site.includes('href: "/recommend/"'));
  assert.ok(site.includes('href: "/compare/"'));
  assert.ok(site.includes('href: "/contribute/"'));
  assert.ok(!site.includes('href: "/#palettes"'));
  assert.ok(detailPage.includes('href={`${siteConfig.basePath}/palettes/`}'));
  assert.ok(detailPage.includes("<ColorVisionPreview"));
  assert.ok(colorVisionPreview.includes("Color vision simulation"));
  assert.ok(colorVisionPreview.includes("colorVisionModes.map"));
  assert.ok(colorVisionModes.some((mode) => mode.label === "Protanopia"));
  assert.ok(colorVisionModes.some((mode) => mode.label === "Deuteranopia"));
  assert.ok(colorVisionModes.some((mode) => mode.label === "Tritanopia"));
  assert.ok(detailPage.includes("<GrayscaleContrastPanel"));
  assert.ok(grayscaleContrastPanel.includes("Grayscale contrast check"));
  assert.ok(grayscaleContrastPanel.includes("Minimum grayscale ratio"));
  assert.ok(contributionPanel.includes("Submit a palette"));
  assert.ok(contributionPanel.includes("palette_request.yml"));
  assert.ok(contributionPanel.includes("SciPalette contribution JSON"));
  assert.ok(paletteRequest.includes("SciPalette contribution JSON"));
  assert.ok(paperInspirationPanel.includes("Submit paper inspiration"));
  assert.ok(paperInspirationPanel.includes("paper_inspiration.yml"));
  assert.ok(paperInspirationPanel.includes("DOI"));
  assert.ok(paperInspiration.includes("doi"));
  assert.ok(paperInspiration.includes("paper_url"));
  assert.ok(paperInspiration.includes("figure_reference"));
  assert.ok(paperInspiration.includes("citation"));
  assert.ok(readme.includes("- [x] DOI / 论文图灵感收集"));
  assert.ok(readmeEn.includes("- [x] DOI / paper figure inspiration collection"));
  assert.ok(readme.includes("- [x] 配色方案对比视图"));
  assert.ok(readmeEn.includes("- [x] Palette comparison view"));
  assert.ok(readme.includes("recommend/index.astro"));
  assert.ok(readme.includes("compare/index.astro"));
  assert.ok(readme.includes("contribute/index.astro"));
  assert.ok(readmeEn.includes("recommend/index.astro"));
  assert.ok(readmeEn.includes("compare/index.astro"));
  assert.ok(readmeEn.includes("contribute/index.astro"));
  assert.ok(architecture.includes("src/pages/recommend/index.astro"));
  assert.ok(architecture.includes("src/pages/compare/index.astro"));
  assert.ok(architecture.includes("src/pages/contribute/index.astro"));
  assert.ok(recommendationPanel.includes("Local palette recommendation"));
  assert.ok(recommendationPanel.includes("Runs locally"));
  assert.ok(recommendationPanel.includes("recommendationPresets"));
}
);

test("site header has an adaptive mobile navigation menu", () => {
  const header = readFileSync("src/components/SiteHeader.astro", "utf8");

  assert.ok(header.includes("<details"));
  assert.ok(header.includes("<summary"));
  assert.ok(header.includes("md:hidden"));
  assert.ok(header.includes("hidden items-center"));
  assert.ok(header.includes("md:flex"));
  assert.ok(header.includes("Mobile navigation"));
  assert.ok(header.includes('<header class="relative z-50'));
  assert.ok(header.includes("z-[60]"));
  assert.ok(!header.includes('<header class="sp-lift'));
  assert.ok(header.includes('import SiteMark from "./SiteMark.astro"'));
  assert.ok(header.includes("<SiteMark"));
});

test("GitHub issue templates include bilingual Chinese and English guidance", () => {
  const issueTemplateFiles = [
    ".github/ISSUE_TEMPLATE/bug_report.yml",
    ".github/ISSUE_TEMPLATE/palette_request.yml",
    ".github/ISSUE_TEMPLATE/paper_inspiration.yml",
  ];

  for (const file of issueTemplateFiles) {
    const source = readFileSync(file, "utf8");

    assert.match(source, /name: .+ \/ .+/, `${file} should have a bilingual name`);
    assert.match(source, /description: .+ \/ .+/, `${file} should have a bilingual description`);
    assert.match(source, /label: .+ \/ .+/, `${file} should have bilingual field labels`);
    assert.ok(/[\u4e00-\u9fff]/.test(source), `${file} should include Chinese text`);
    assert.ok(/[A-Za-z]{4,}/.test(source), `${file} should include English text`);
    assert.ok(source.includes("中文"));
    assert.ok(source.includes("English"));
  }

  const config = readFileSync(".github/ISSUE_TEMPLATE/config.yml", "utf8");

  assert.match(config, /name: .+ \/ .+/);
  assert.match(config, /about: .+ \/ .+/);
  assert.ok(config.includes("中文"));
  assert.ok(config.includes("English"));
});

test("site has a shared footer and about page with palette philosophy", () => {
  const baseLayout = readFileSync("src/layouts/BaseLayout.astro", "utf8");
  const footer = readFileSync("src/components/SiteFooter.astro", "utf8");
  const mark = readFileSync("src/components/SiteMark.astro", "utf8");
  const aboutPage = readFileSync("src/pages/about.astro", "utf8");
  const artworkPath = "public/images/van-gogh-wheat-field-with-cypresses.webp";
  const site = readFileSync("src/lib/site.ts", "utf8");
  const showcase = readFileSync("src/components/PaletteShowcase.tsx", "utf8");
  const browser = readFileSync("src/components/PaletteBrowser.tsx", "utf8");
  const detailPage = readFileSync("src/pages/palettes/[id].astro", "utf8");

  assert.ok(baseLayout.includes('import SiteFooter from "../components/SiteFooter.astro"'));
  assert.ok(baseLayout.includes("<SiteFooter />"));
  assert.ok(mark.includes('src="/favicon.svg"'));
  assert.ok(footer.includes('import SiteMark from "./SiteMark.astro"'));
  assert.ok(footer.includes("<SiteMark"));
  assert.ok(site.includes('id: "about"'));
  assert.ok(site.includes('href: "/about/"'));
  assert.ok(footer.includes("Wheat Field with Cypresses"));
  assert.ok(footer.includes("fantasticjoe.com"));
  assert.ok(footer.includes("SciPalette"));
  assert.ok(aboutPage.includes("Zhouyue Zhu"));
  assert.ok(aboutPage.includes("Biomedical Informatics"));
  assert.ok(aboutPage.includes('import SiteMark from "../components/SiteMark.astro"'));
  assert.ok(aboutPage.includes("Logic"));
  assert.ok(aboutPage.includes("Problem"));
  assert.ok(aboutPage.includes("Method"));
  assert.ok(aboutPage.includes("Tool"));
  assert.ok(aboutPage.includes("Visual source"));
  assert.ok(aboutPage.includes('<section class="py-14">\n      <div class="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]'));
  assert.ok(aboutPage.includes("Logo system"));
  assert.ok(aboutPage.includes("A small mark for color as evidence"));
  assert.ok(aboutPage.includes("Four ordered vertical forms"));
  assert.ok(aboutPage.includes('lg:grid-cols-[0.72fr_1.28fr]'));
  assert.ok(aboutPage.includes('SiteMark class="h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80"'));
  assert.ok(aboutPage.includes('lg:text-right'));
  assert.ok(aboutPage.includes("Color is not a finish"));
  assert.ok(aboutPage.includes("palette choice is not cosmetic"));
  assert.ok(aboutPage.includes("default rainbows"));
  assert.ok(aboutPage.includes("does not simply extract dominant colors"));
  assert.ok(aboutPage.includes("Wheat Field with Cypresses"));
  assert.ok(aboutPage.includes("麦田与柏树"));
  assert.ok(aboutPage.includes("Author and project"));
  assert.ok(aboutPage.includes("Built by a researcher"));
  assert.ok(aboutPage.includes("Paper ground"));
  assert.ok(aboutPage.includes("Cypress green"));
  assert.ok(aboutPage.includes("Muted wheat"));
  assert.ok(aboutPage.includes("Blue-gray air"));
  assert.ok(aboutPage.includes("#F8F5EC"));
  assert.ok(aboutPage.includes("#4F6D5F"));
  assert.ok(aboutPage.includes("#BFA05A"));
  assert.ok(aboutPage.includes("#6F8792"));
  assert.ok(aboutPage.includes("/images/van-gogh-wheat-field-with-cypresses.webp"));
  assert.ok(aboutPage.includes("Original painting"));
  assert.ok(aboutPage.includes("Vincent van Gogh"));
  assert.ok(existsSync(artworkPath));
  assert.ok(statSync(artworkPath).size > 10_000);
  assert.ok(!showcase.includes("<footer"));
  assert.ok(!browser.includes("<footer"));
  assert.ok(!detailPage.includes("<footer"));
});
