import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  calculateContrastRatio,
  hexToRgb,
  oklabDistance,
  oklchToRgb,
  rgbToHex,
  rgbToOklab,
  rgbToOklch,
} from "../src/lib/art2pal/color";
import { formatPaletteExport } from "../src/lib/art2pal/export";
import { safeCopyText } from "../src/lib/art2pal/clipboard";
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
import { siteConfig } from "../src/lib/site";

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

test("formats palette exports for common scientific workflows", () => {
  const colors = ["#123456", "#abcdef", "#e07a5f"];

  assert.equal(formatPaletteExport(colors, "hex"), "#123456, #abcdef, #e07a5f");
  assert.match(formatPaletteExport(colors, "json"), /"#abcdef"/);
  assert.match(formatPaletteExport(colors, "css"), /--color-2: #abcdef;/);
  assert.equal(formatPaletteExport(colors, "python"), 'palette = ["#123456", "#abcdef", "#e07a5f"]');
  assert.match(formatPaletteExport(colors, "r"), /scale_color_manual\(values = c\("#123456", "#abcdef", "#e07a5f"\)\)/);
  assert.match(formatPaletteExport(colors, "r"), /scale_fill_manual\(values = c\("#123456", "#abcdef", "#e07a5f"\)\)/);
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
