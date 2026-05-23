export type RgbColor = {
  r: number;
  g: number;
  b: number;
};

export type OklabColor = {
  L: number;
  a: number;
  b: number;
};

export type OklchColor = {
  L: number;
  C: number;
  h: number;
};

const WHITE: RgbColor = { r: 255, g: 255, b: 255 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function linearize(channel: number): number {
  const value = clamp(channel, 0, 255) / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function delinearize(value: number): number {
  const channel = value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055;
  return Math.round(clamp(channel, 0, 1) * 255);
}

export function rgbToHex(color: RgbColor): string {
  return `#${[color.r, color.g, color.b]
    .map((channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

export function hexToRgb(hex: string): RgbColor {
  const normalized = hex.trim().replace(/^#/, "");
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((char) => char + char)
          .join("")
      : normalized;

  if (!/^[0-9a-fA-F]{6}$/.test(expanded)) {
    throw new Error(`Invalid HEX color: ${hex}`);
  }

  return {
    r: Number.parseInt(expanded.slice(0, 2), 16),
    g: Number.parseInt(expanded.slice(2, 4), 16),
    b: Number.parseInt(expanded.slice(4, 6), 16),
  };
}

export function rgbToOklab(color: RgbColor): OklabColor {
  const r = linearize(color.r);
  const g = linearize(color.g);
  const b = linearize(color.b);

  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
  const s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;

  const lRoot = Math.cbrt(l);
  const mRoot = Math.cbrt(m);
  const sRoot = Math.cbrt(s);

  return {
    L: 0.2104542553 * lRoot + 0.793617785 * mRoot - 0.0040720468 * sRoot,
    a: 1.9779984951 * lRoot - 2.428592205 * mRoot + 0.4505937099 * sRoot,
    b: 0.0259040371 * lRoot + 0.7827717662 * mRoot - 0.808675766 * sRoot,
  };
}

export function oklabToRgb(color: OklabColor): RgbColor {
  const lRoot = color.L + 0.3963377774 * color.a + 0.2158037573 * color.b;
  const mRoot = color.L - 0.1055613458 * color.a - 0.0638541728 * color.b;
  const sRoot = color.L - 0.0894841775 * color.a - 1.291485548 * color.b;

  const l = lRoot ** 3;
  const m = mRoot ** 3;
  const s = sRoot ** 3;

  return {
    r: delinearize(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    g: delinearize(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    b: delinearize(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  };
}

export function rgbToOklch(color: RgbColor): OklchColor {
  return oklabToOklch(rgbToOklab(color));
}

export function oklabToOklch(color: OklabColor): OklchColor {
  const hue = (Math.atan2(color.b, color.a) * 180) / Math.PI;
  return {
    L: color.L,
    C: Math.sqrt(color.a ** 2 + color.b ** 2),
    h: (hue + 360) % 360,
  };
}

export function oklchToOklab(color: OklchColor): OklabColor {
  const hueRadians = (color.h * Math.PI) / 180;
  return {
    L: color.L,
    a: color.C * Math.cos(hueRadians),
    b: color.C * Math.sin(hueRadians),
  };
}

export function oklchToRgb(color: OklchColor): RgbColor {
  return oklabToRgb(oklchToOklab(color));
}

export function oklabDistance(first: OklabColor, second: OklabColor): number {
  return Math.sqrt((first.L - second.L) ** 2 + (first.a - second.a) ** 2 + (first.b - second.b) ** 2);
}

export function hueDistance(first: number, second: number): number {
  const diff = Math.abs(first - second) % 360;
  return Math.min(diff, 360 - diff);
}

export function relativeLuminance(color: RgbColor): number {
  const r = linearize(color.r);
  const g = linearize(color.g);
  const b = linearize(color.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function calculateContrastRatio(first: RgbColor, second: RgbColor = WHITE): number {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

export function clampOklchForRgb(color: OklchColor): OklchColor {
  let chroma = color.C;
  for (let i = 0; i < 18; i += 1) {
    const rgb = oklchToRgb({ ...color, C: chroma });
    const roundTrip = rgbToOklch(rgb);
    if (Math.abs(roundTrip.h - color.h) < 6 || chroma < 0.01) {
      return { ...color, C: chroma };
    }
    chroma *= 0.9;
  }
  return { ...color, C: chroma };
}
