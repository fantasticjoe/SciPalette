import type { GeneratedPalette } from "../../lib/art2pal/palette";
import { barMockData, densityMockData, heatmapMockData, umapMockData } from "../../lib/art2pal/preview";

export type PreviewType = "umap" | "heatmap" | "density" | "bar";

type ScientificPreviewProps = {
  previewType: PreviewType;
  palettes: {
    categorical: GeneratedPalette;
    sequential: GeneratedPalette;
    diverging: GeneratedPalette;
    neutral: GeneratedPalette;
  };
  onPreviewTypeChange: (type: PreviewType) => void;
};

const previewOptions: { value: PreviewType; label: string }[] = [
  { value: "umap", label: "UMAP scatter" },
  { value: "heatmap", label: "Heatmap" },
  { value: "density", label: "Feature density" },
  { value: "bar", label: "Bar plot" },
];

function pick(colors: string[], index: number): string {
  return colors[index % colors.length] ?? "#4f6d5f";
}

function axisColor(neutral: string[]): string {
  return neutral[3] ?? "#6f746c";
}

function UmapPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const axis = axisColor(palettes.neutral.colors);
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="UMAP preview using categorical palette" className="h-full w-full">
      <rect width="560" height="320" rx="6" fill={palettes.neutral.colors[0] ?? "#fbf9f2"} />
      <line x1="52" y1="268" x2="518" y2="268" stroke={axis} strokeOpacity="0.45" />
      <line x1="52" y1="36" x2="52" y2="268" stroke={axis} strokeOpacity="0.45" />
      {umapMockData.map((point, index) => (
        <circle
          key={index}
          cx={52 + ((point.x + 1.05) / 2.1) * 466}
          cy={268 - ((point.y + 0.9) / 1.8) * 232}
          r="4.2"
          fill={pick(palettes.categorical.colors, point.group)}
          fillOpacity="0.9"
        />
      ))}
      <text x="52" y="296" fill={axis} fontSize="13" fontWeight="700">
        UMAP 1
      </text>
      <text x="18" y="36" fill={axis} fontSize="13" fontWeight="700" transform="rotate(-90 18 36)">
        UMAP 2
      </text>
    </svg>
  );
}

function colorRamp(colors: string[], value: number): string {
  const index = Math.max(0, Math.min(colors.length - 1, Math.round(value * (colors.length - 1))));
  return colors[index];
}

function HeatmapPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const cellWidth = 33;
  const cellHeight = 24;
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Heatmap preview using diverging palette" className="h-full w-full">
      <rect width="560" height="320" rx="6" fill={palettes.neutral.colors[0] ?? "#fbf9f2"} />
      <g transform="translate(74 48)">
        {heatmapMockData.map((row, rowIndex) =>
          row.map((value, columnIndex) => (
            <rect
              key={`${rowIndex}-${columnIndex}`}
              x={columnIndex * cellWidth}
              y={rowIndex * cellHeight}
              width={cellWidth - 1}
              height={cellHeight - 1}
              fill={colorRamp(palettes.diverging.colors, (value + 1) / 2)}
            />
          ))
        )}
      </g>
      <text x="74" y="286" fill={axisColor(palettes.neutral.colors)} fontSize="13" fontWeight="700">
        centered effect size
      </text>
    </svg>
  );
}

function DensityPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const axis = axisColor(palettes.neutral.colors);
  const path = densityMockData
    .map((point, index) => {
      const x = 58 + point.x * 450;
      const y = 268 - point.y * 210;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L 508 268 L 58 268 Z`;

  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Feature density preview using sequential palette" className="h-full w-full">
      <rect width="560" height="320" rx="6" fill={palettes.neutral.colors[0] ?? "#fbf9f2"} />
      <line x1="58" y1="268" x2="508" y2="268" stroke={axis} strokeOpacity="0.45" />
      <line x1="58" y1="48" x2="58" y2="268" stroke={axis} strokeOpacity="0.45" />
      <path d={area} fill={palettes.sequential.colors[3]} fillOpacity="0.34" />
      <path d={path} fill="none" stroke={palettes.sequential.colors.at(-1) ?? "#206543"} strokeWidth="4" strokeLinecap="round" />
      <text x="58" y="296" fill={axis} fontSize="13" fontWeight="700">
        expression value
      </text>
    </svg>
  );
}

function BarPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const axis = axisColor(palettes.neutral.colors);
  return (
    <svg viewBox="0 0 560 320" role="img" aria-label="Bar plot preview using categorical palette" className="h-full w-full">
      <rect width="560" height="320" rx="6" fill={palettes.neutral.colors[0] ?? "#fbf9f2"} />
      <line x1="56" y1="268" x2="518" y2="268" stroke={axis} strokeOpacity="0.45" />
      <line x1="56" y1="42" x2="56" y2="268" stroke={axis} strokeOpacity="0.45" />
      {barMockData.map((value, index) => {
        const height = value * 190;
        return <rect key={index} x={76 + index * 52} y={268 - height} width="30" height={height} fill={pick(palettes.categorical.colors, index)} rx="2" />;
      })}
      <text x="56" y="296" fill={axis} fontSize="13" fontWeight="700">
        experimental group
      </text>
    </svg>
  );
}

export function ScientificPreview({ previewType, palettes, onPreviewTypeChange }: ScientificPreviewProps) {
  return (
    <section className="sp-panel sp-lift rounded-lg p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Scientific preview</p>
          <h2 className="font-display mt-1 text-3xl font-bold tracking-[-0.02em] text-[#212c33]">Publication-style mock plot</h2>
        </div>
        <label className="sr-only" htmlFor="art2pal-preview-type">
          Preview type
        </label>
        <select
          id="art2pal-preview-type"
          name="art2pal-preview-type"
          className="sp-control px-3 py-2 text-sm"
          value={previewType}
          onChange={(event) => onPreviewTypeChange(event.target.value as PreviewType)}
        >
          {previewOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="aspect-[7/4] overflow-hidden rounded-md border border-[#dadcd6] bg-[rgb(251_249_242_/_0.76)]">
        {previewType === "umap" && <UmapPreview palettes={palettes} />}
        {previewType === "heatmap" && <HeatmapPreview palettes={palettes} />}
        {previewType === "density" && <DensityPreview palettes={palettes} />}
        {previewType === "bar" && <BarPreview palettes={palettes} />}
      </div>
    </section>
  );
}
