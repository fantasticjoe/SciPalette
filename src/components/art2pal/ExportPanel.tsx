import { Copy } from "lucide-react";
import { formatPaletteExport, paletteExportFormats, type PaletteExportFormat } from "../../lib/art2pal/export";

type ExportPanelProps = {
  colors: string[];
  format: PaletteExportFormat;
  onFormatChange: (format: PaletteExportFormat) => void;
  onCopy: (value: string) => void;
};

export function ExportPanel({ colors, format, onFormatChange, onCopy }: ExportPanelProps) {
  const output = formatPaletteExport(colors, format);
  const inputId = `art2pal-export-${colors.join("-").replaceAll("#", "")}`;

  return (
    <div className="mt-4 border-t border-[#dadcd6] pt-4">
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <label className="text-xs font-bold uppercase tracking-[0.14em] text-[rgb(33_44_51_/_0.58)]" htmlFor={inputId}>
          Export format
          <select
            id={inputId}
            name={inputId}
            className="sp-control mt-1 block min-w-44 px-3 py-2 text-sm normal-case tracking-normal"
            value={format}
            onChange={(event) => onFormatChange(event.target.value as PaletteExportFormat)}
          >
            {paletteExportFormats.map((option) => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="sp-button-secondary px-3 py-2 text-sm" onClick={() => onCopy(output)}>
          <Copy className="h-4 w-4" aria-hidden="true" />
          Copy palette
        </button>
      </div>
      <pre className="max-h-44 overflow-auto rounded-md border border-[#dadcd6] bg-[rgb(33_44_51_/_0.04)] p-3 text-xs leading-5 text-[#212c33]">
        <code>{output}</code>
      </pre>
    </div>
  );
}
