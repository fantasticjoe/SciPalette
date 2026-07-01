import { RotateCcw } from "lucide-react";

type ParameterPanelProps = {
  categoricalCount: number;
  canRegenerate: boolean;
  onCategoricalCountChange: (count: number) => void;
  onRegenerate: () => void;
};

export function ParameterPanel({ categoricalCount, canRegenerate, onCategoricalCountChange, onRegenerate }: ParameterPanelProps) {
  const setCount = (value: number) => {
    if (!Number.isFinite(value)) {
      return;
    }
    onCategoricalCountChange(Math.max(4, Math.min(20, value)));
  };

  return (
    <section className="sp-panel rounded-lg p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Palette controls</p>
      <h2 className="font-display mt-1 text-3xl font-bold tracking-[-0.02em] text-[#212c33]">Tune output</h2>
      <div className="mt-5 space-y-5">
        <label className="block">
          <span className="flex items-center justify-between text-sm font-bold text-[#212c33]">
            Categorical colors
            <input
              id="art2pal-categorical-count"
              name="art2pal-categorical-count"
              className="sp-control w-16 px-2 py-1 text-center font-mono text-sm text-[#4f6d5f]"
              type="number"
              min={4}
              max={20}
              value={categoricalCount}
              aria-label="Categorical color count"
              onInput={(event) => setCount(Number(event.currentTarget.value))}
              onChange={(event) => setCount(Number(event.target.value))}
            />
          </span>
          <input
            id="art2pal-categorical-count-slider"
            name="art2pal-categorical-count-slider"
            aria-label="Categorical color count slider"
            type="range"
            min={4}
            max={20}
            step={1}
            value={categoricalCount}
            className="mt-3 w-full accent-[#4f6d5f]"
            onInput={(event) => setCount(Number(event.currentTarget.value))}
            onChange={(event) => setCount(Number(event.target.value))}
          />
          <span className="mt-1 block text-xs font-medium text-[rgb(33_44_51_/_0.56)]">Use 4-20 colors for cell types, groups, or clusters. When the image has fewer distinct hues than requested categories, Art2Pal expands additional colors from the source palette.</span>
        </label>
        <button type="button" className="sp-button-secondary w-full px-4 py-3 text-sm" onClick={onRegenerate} disabled={!canRegenerate}>
          <RotateCcw className="h-4 w-4" aria-hidden="true" />
          Regenerate palettes
        </button>
      </div>
    </section>
  );
}
