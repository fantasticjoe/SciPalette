import { useMemo, useState } from "react";
import { AlertTriangle, Check, FlaskConical, Sparkles } from "lucide-react";
import type { CandidateColorSet, GeneratedPalette } from "../../lib/art2pal/palette";
import { generateArt2PalPalettes, generateCategoricalPalette } from "../../lib/art2pal/palette";
import { isSupportedImage, loadImageToCanvas, type ImageProcessingResult } from "../../lib/art2pal/image";
import type { PaletteExportFormat } from "../../lib/art2pal/export";
import { ImageUploader } from "./ImageUploader";
import { PaletteSection } from "./PaletteSection";
import { ParameterPanel } from "./ParameterPanel";
import { ScientificPreview, type PreviewType } from "./ScientificPreview";

type ToolState = "idle" | "loading-image" | "calculating" | "ready" | "error";

type GeneratedPalettes = {
  status: "generated" | "fallback";
  candidates: CandidateColorSet;
  categorical: GeneratedPalette;
  sequential: GeneratedPalette;
  diverging: GeneratedPalette;
  neutral: GeneratedPalette;
  messages: string[];
};

const INITIAL_FORMATS: Record<GeneratedPalette["id"], PaletteExportFormat> = {
  categorical: "hex",
  sequential: "hex",
  diverging: "hex",
  neutral: "hex",
};

function statusLabel(state: ToolState): string {
  switch (state) {
    case "loading-image":
      return "Reading and resizing image locally...";
    case "calculating":
      return "Extracting color style and rebuilding scientific palettes...";
    case "ready":
      return "Palette ready. Upload another image to regenerate from new artwork.";
    case "error":
      return "Unable to process this image.";
    case "idle":
    default:
      return "Upload an image to start local palette extraction.";
  }
}

function imageInfo(image?: ImageProcessingResult): string | undefined {
  if (!image) {
    return undefined;
  }

  const resized = image.wasResized ? ` resized to ${image.width} x ${image.height}` : " sampled at original display size";
  return `${image.originalWidth} x ${image.originalHeight}px image,${resized}, ${image.pixels.length.toLocaleString()} pixels sampled.`;
}

export default function Art2PalPaletteTool() {
  const [state, setState] = useState<ToolState>("idle");
  const [error, setError] = useState<string | undefined>();
  const [image, setImage] = useState<ImageProcessingResult | undefined>();
  const [palettes, setPalettes] = useState<GeneratedPalettes | undefined>();
  const [categoricalCount, setCategoricalCount] = useState(8);
  const [seed, setSeed] = useState(11);
  const [previewType, setPreviewType] = useState<PreviewType>("umap");
  const [formats, setFormats] = useState(INITIAL_FORMATS);
  const [copiedLabel, setCopiedLabel] = useState<string | undefined>();

  const paletteList = useMemo(() => (palettes ? [palettes.categorical, palettes.sequential, palettes.diverging, palettes.neutral] : []), [palettes]);

  const copyText = async (value: string, label = "Copied") => {
    await navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    window.setTimeout(() => setCopiedLabel(undefined), 1800);
  };

  const calculatePalettes = (pixels: ImageProcessingResult["pixels"], nextCount = categoricalCount, nextSeed = seed) => {
    setState("calculating");
    window.setTimeout(() => {
      try {
        const result = generateArt2PalPalettes(pixels, { categoricalCount: nextCount, seed: nextSeed });
        setPalettes({
          status: result.status,
          candidates: result.candidates,
          categorical: result.categorical,
          sequential: result.sequential,
          diverging: result.diverging,
          neutral: result.neutral,
          messages: result.messages,
        });
        setError(undefined);
        setState("ready");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Palette generation failed.");
        setState("error");
      }
    }, 20);
  };

  const handleFileSelect = async (file: File) => {
    if (!isSupportedImage(file)) {
      setError("Unsupported image format. Please use PNG, JPEG, or WebP.");
      setState("error");
      return;
    }

    setError(undefined);
    setState("loading-image");
    try {
      const processed = await loadImageToCanvas(file, { maxDimension: 512, maxSamples: 30000 });
      setImage(processed);
      calculatePalettes(processed.pixels);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not read this image in the browser.");
      setState("error");
    }
  };

  const handleCategoricalCountChange = (nextCount: number) => {
    setCategoricalCount(nextCount);
    if (palettes) {
      const colors = generateCategoricalPalette(palettes.candidates, { count: nextCount, seed });
      setPalettes({
        ...palettes,
        categorical: {
          ...palettes.categorical,
          colors,
        },
      });
    }
  };

  const regenerate = () => {
    if (!image) {
      return;
    }
    const nextSeed = seed + 17;
    setSeed(nextSeed);
    calculatePalettes(image.pixels, categoricalCount, nextSeed);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="sp-reveal mb-8">
        <div className="flex max-w-4xl flex-col gap-4">
          <p className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">
            <FlaskConical className="h-4 w-4" aria-hidden="true" />
            Art2Pal Palette
          </p>
          <h1 className="font-display text-5xl font-bold leading-none tracking-[-0.02em] text-[#212c33] sm:text-6xl">
            Turn artwork color into scientific palettes.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[rgb(33_44_51_/_0.72)]">
            Upload an oil painting, artwork, or image. The browser extracts its color style locally, then rebuilds it into categorical, sequential,
            diverging, and neutral palettes for publication figures.
          </p>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.55fr)]">
        <div className="space-y-6">
          <ImageUploader
            previewUrl={image?.previewUrl}
            isBusy={state === "loading-image" || state === "calculating"}
            statusLabel={statusLabel(state)}
            error={error}
            imageInfo={imageInfo(image)}
            onFileSelect={handleFileSelect}
          />

          {palettes && (
            <ScientificPreview
              previewType={previewType}
              palettes={{
                categorical: palettes.categorical,
                sequential: palettes.sequential,
                diverging: palettes.diverging,
                neutral: palettes.neutral,
              }}
              onPreviewTypeChange={setPreviewType}
            />
          )}
        </div>

        <aside className="space-y-6">
          <ParameterPanel
            categoricalCount={categoricalCount}
            onCategoricalCountChange={handleCategoricalCountChange}
            canRegenerate={Boolean(image) && state !== "loading-image" && state !== "calculating"}
            onRegenerate={regenerate}
          />

          <section className="sp-panel rounded-lg p-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Local workflow</p>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[rgb(33_44_51_/_0.68)]">
              <p>1. Resize image in browser before sampling.</p>
              <p>2. Cluster sampled pixels in OKLab color space.</p>
              <p>3. Filter colors for scientific contrast and readability.</p>
              <p>4. Generate palettes for categorical and continuous plots.</p>
            </div>
          </section>

          {copiedLabel && (
            <div className="sp-panel border-[rgb(79_109_95_/_0.28)] bg-[rgb(122_158_141_/_0.12)] p-4 text-sm font-bold text-[#2f453d]">
              <Check className="mr-2 inline h-4 w-4" aria-hidden="true" />
              {copiedLabel}
            </div>
          )}
        </aside>
      </div>

      {palettes?.messages.length ? (
        <div className="sp-reveal mt-6 rounded-lg border border-[#dadcd6] bg-[rgb(251_249_242_/_0.78)] p-4 text-sm font-semibold text-[rgb(33_44_51_/_0.72)]">
          <AlertTriangle className="mr-2 inline h-4 w-4 text-[#4f6d5f]" aria-hidden="true" />
          {palettes.messages.join(" ")}
        </div>
      ) : null}

      {!palettes && state === "idle" && (
        <section className="sp-reveal sp-panel mt-6 rounded-lg p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-[#212c33]">No image uploaded yet</h2>
              <p className="mt-1 text-sm leading-6 text-[rgb(33_44_51_/_0.68)]">Start with an artwork image to generate local palettes and previews.</p>
            </div>
            <Sparkles className="h-8 w-8 text-[#4f6d5f]" aria-hidden="true" />
          </div>
        </section>
      )}

      {palettes && (
        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          {paletteList.map((palette) => (
            <PaletteSection
              key={palette.id}
              palette={palette}
              format={formats[palette.id]}
              onFormatChange={(format) => setFormats((current) => ({ ...current, [palette.id]: format }))}
              onCopy={(value) => copyText(value, value.startsWith("#") ? `${value} copied` : `${palette.name} copied`)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
