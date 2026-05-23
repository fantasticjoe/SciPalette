import { useMemo, useState } from "react";
import { ArrowLeftRight, CheckCircle2 } from "lucide-react";
import { palettes } from "../lib/palettes";
import { comparePalettes } from "../lib/palette-comparison";
import type { Palette } from "../lib/types";

export function PaletteComparisonPanel() {
  const [leftId, setLeftId] = useState(palettes[0]?.id ?? "");
  const [rightId, setRightId] = useState(palettes[1]?.id ?? "");

  const left = palettes.find((palette) => palette.id === leftId) ?? palettes[0];
  const right = palettes.find((palette) => palette.id === rightId) ?? palettes[1] ?? palettes[0];
  const comparison = useMemo(() => comparePalettes(left, right), [left, right]);

  const swapPalettes = () => {
    setLeftId(right.id);
    setRightId(left.id);
  };

  return (
    <section className="sp-panel-muted p-5 sm:p-6" aria-labelledby="palette-comparison-title">
      <div className="flex flex-col gap-5 border-b border-[#dadcd6] pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">
            <ArrowLeftRight className="h-3.5 w-3.5" aria-hidden="true" />
            Palette comparison
          </p>
          <h2 id="palette-comparison-title" className="font-display mt-2 text-4xl font-bold leading-tight tracking-[-0.02em] text-[#212c33]">
            Compare two palettes before choosing one.
          </h2>
          <p className="mt-3 max-w-3xl text-[1rem] leading-7 text-[rgb(33_44_51_/_0.7)]">
            Check use-case overlap, color count, shared tags, and grayscale separability side by side.
          </p>
        </div>
        <button type="button" onClick={swapPalettes} className="sp-button-secondary w-fit px-4 py-2.5 text-sm">
          <ArrowLeftRight className="h-4 w-4" aria-hidden="true" />
          Swap
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <PaletteSelect label="First palette" value={left.id} onChange={setLeftId} />
        <PaletteSelect label="Second palette" value={right.id} onChange={setRightId} />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <PaletteComparisonCard palette={left} minimumRatio={comparison.grayscale.left.minimumRatio} />
        <PaletteComparisonCard palette={right} minimumRatio={comparison.grayscale.right.minimumRatio} />
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.74)] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#4f6d5f]">Comparison summary</p>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[rgb(33_44_51_/_0.72)]">
            {comparison.summary.map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4f6d5f]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-3 border border-[#dadcd6] bg-[rgb(248_245_236_/_0.74)] p-4 text-sm leading-6 text-[rgb(33_44_51_/_0.72)] sm:grid-cols-2">
          <Metric label="Shared plot types" value={comparison.sharedPlotTypes.join(", ") || "None"} />
          <Metric label="Shared tags" value={comparison.sharedTags.slice(0, 4).join(", ") || "None"} />
          <Metric label="Color count difference" value={`${comparison.colorCountDelta} color${comparison.colorCountDelta === 1 ? "" : "s"}`} />
          <Metric label="Unique colors" value={`${comparison.leftOnlyColors.length} / ${comparison.rightOnlyColors.length}`} />
        </div>
      </div>
    </section>
  );
}

function PaletteSelect({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label>
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.66)]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="sp-control px-3 py-2.5 text-sm font-semibold"
      >
        {palettes.map((palette) => (
          <option key={palette.id} value={palette.id}>{palette.name}</option>
        ))}
      </select>
    </label>
  );
}

function PaletteComparisonCard({
  palette,
  minimumRatio,
}: {
  palette: Palette;
  minimumRatio: number;
}) {
  return (
    <article className="border border-[#dadcd6] bg-[rgb(248_245_236_/_0.74)] p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#4f6d5f]">{palette.category}</p>
          <h3 className="font-display mt-1 text-2xl font-bold leading-tight text-[#212c33]">{palette.name}</h3>
        </div>
        <span className="sp-chip w-fit px-2.5 py-1 text-xs">{palette.colors.length} colors</span>
      </div>

      <div className="mt-4 flex h-14 overflow-hidden border border-[#dadcd6]">
        {palette.colors.map((color) => (
          <div key={color} className="flex-1" style={{ backgroundColor: color }} title={color} />
        ))}
      </div>

      <div className="mt-4 grid gap-2 text-sm leading-6 text-[rgb(33_44_51_/_0.72)] sm:grid-cols-2">
        <Metric label="Background" value={palette.background} />
        <Metric label="Min grayscale ratio" value={Number.isFinite(minimumRatio) ? minimumRatio.toFixed(2) : "N/A"} />
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[rgb(33_44_51_/_0.52)]">{label}</p>
      <p className="mt-1 font-semibold text-[#212c33]">{value}</p>
    </div>
  );
}
