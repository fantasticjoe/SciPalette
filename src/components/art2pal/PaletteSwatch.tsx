type PaletteSwatchProps = {
  color: string;
  onCopy: (value: string) => void;
};

export function PaletteSwatch({ color, onCopy }: PaletteSwatchProps) {
  return (
    <button
      type="button"
      className="group flex min-h-24 flex-col overflow-hidden rounded-md border border-[#dadcd6] bg-[rgb(251_249_242_/_0.78)] text-left shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-[rgb(79_109_95_/_0.32)]"
      onClick={() => onCopy(color)}
      aria-label={`Copy ${color}`}
    >
      <span className="block flex-1" style={{ backgroundColor: color }} />
      <span className="px-2 py-2 font-mono text-xs font-semibold uppercase text-[rgb(33_44_51_/_0.72)] transition-colors group-hover:text-[#212c33]">
        {color}
      </span>
    </button>
  );
}
