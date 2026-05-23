import type { GeneratedPalette } from "../../lib/art2pal/palette";
import type { PaletteExportFormat } from "../../lib/art2pal/export";
import { ExportPanel } from "./ExportPanel";
import { PaletteSwatch } from "./PaletteSwatch";

type PaletteSectionProps = {
  palette: GeneratedPalette;
  format: PaletteExportFormat;
  onFormatChange: (format: PaletteExportFormat) => void;
  onCopy: (value: string) => void;
};

export function PaletteSection({ palette, format, onFormatChange, onCopy }: PaletteSectionProps) {
  return (
    <section className="sp-panel sp-lift rounded-lg p-5">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">{palette.usage}</p>
          <h3 className="font-display mt-1 text-3xl font-bold tracking-[-0.02em] text-[#212c33]">{palette.name}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-[rgb(33_44_51_/_0.66)]">{palette.description}</p>
        </div>
        <p className="text-sm font-semibold text-[rgb(33_44_51_/_0.56)]">{palette.colors.length} colors</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {palette.colors.map((color) => (
          <PaletteSwatch color={color} onCopy={onCopy} key={`${palette.id}-${color}`} />
        ))}
      </div>
      <ExportPanel colors={palette.colors} format={format} onFormatChange={onFormatChange} onCopy={onCopy} />
    </section>
  );
}
