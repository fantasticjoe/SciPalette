import type { RgbColor } from "./color";

export type ImageProcessingResult = {
  pixels: RgbColor[];
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  wasResized: boolean;
  previewUrl: string;
};

export type ImageProcessingOptions = {
  maxDimension?: number;
  maxSamples?: number;
};

const SUPPORTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const SUPPORTED_IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp"]);

export function isSupportedImage(file: File): boolean {
  if (SUPPORTED_IMAGE_TYPES.has(file.type)) {
    return true;
  }

  const extension = file.name?.split(".").pop()?.toLowerCase();
  return Boolean(extension && SUPPORTED_IMAGE_EXTENSIONS.has(extension));
}

export function getResizeDimensions(width: number, height: number, maxDimension = 512): { width: number; height: number; wasResized: boolean } {
  const longest = Math.max(width, height);
  if (longest <= maxDimension) {
    return { width, height, wasResized: false };
  }

  const scale = maxDimension / longest;
  return {
    width: Math.max(1, Math.round(width * scale)),
    height: Math.max(1, Math.round(height * scale)),
    wasResized: true,
  };
}

function seededRandom(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

export function sampleImageData(data: Uint8ClampedArray, width: number, height: number, maxSamples: number, seed = 42): RgbColor[] {
  const totalPixels = width * height;
  const targetSamples = Math.min(totalPixels, maxSamples);
  const random = seededRandom(seed);
  const sampledIndexes = new Set<number>();
  const pixels: RgbColor[] = [];

  while (sampledIndexes.size < targetSamples) {
    sampledIndexes.add(Math.floor(random() * totalPixels));
  }

  for (const sampledIndex of sampledIndexes) {
    const index = sampledIndex * 4;
    if (data[index + 3] < 24) {
      continue;
    }
    pixels.push({ r: data[index], g: data[index + 1], b: data[index + 2] });
  }

  return pixels;
}

export async function loadImageToCanvas(file: File, options: ImageProcessingOptions = {}): Promise<ImageProcessingResult> {
  const maxDimension = options.maxDimension ?? 512;
  const maxSamples = options.maxSamples ?? 30000;

  if (!isSupportedImage(file)) {
    throw new Error("Unsupported image format. Use PNG, JPEG, or WebP.");
  }

  const bitmap = await createImageBitmap(file, { colorSpaceConversion: "default" });
  const originalWidth = bitmap.width;
  const originalHeight = bitmap.height;
  const dimensions = getResizeDimensions(originalWidth, originalHeight, maxDimension);
  const canvas = document.createElement("canvas");
  canvas.width = dimensions.width;
  canvas.height = dimensions.height;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    bitmap.close();
    throw new Error("This browser could not create a 2D canvas for local image processing.");
  }

  context.drawImage(bitmap, 0, 0, dimensions.width, dimensions.height);
  bitmap.close();

  const imageData = context.getImageData(0, 0, dimensions.width, dimensions.height);

  return {
    pixels: sampleImageData(imageData.data, dimensions.width, dimensions.height, maxSamples),
    width: dimensions.width,
    height: dimensions.height,
    originalWidth,
    originalHeight,
    wasResized: dimensions.wasResized,
    previewUrl: canvas.toDataURL("image/jpeg", 0.9),
  };
}
