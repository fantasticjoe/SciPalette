import { hexToRgb } from "../lib/palette-utils";
import { CopyButton } from "./CopyButton";

interface ColorSwatchProps {
  color: string;
  showDetails?: boolean;
}

export function ColorSwatch({ color, showDetails = false }: ColorSwatchProps) {
  const rgb = hexToRgb(color);

  return (
    <div className="group">
      <div
        className="h-24 w-full rounded-[18px] border border-[#dadcd6] shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
        style={{ backgroundColor: color }}
        title={color}
      />
      {showDetails && (
        <div className="mt-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-mono text-sm font-semibold text-[#212c33]">{color}</span>
            <CopyButton text={color} className="opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100" />
          </div>
          {rgb && (
            <p className="font-mono text-xs text-[rgb(33_44_51_/_0.58)]">
              RGB({rgb.r}, {rgb.g}, {rgb.b})
            </p>
          )}
        </div>
      )}
    </div>
  );
}
