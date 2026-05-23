import * as d3 from "d3";
import type { GeneratedPalette } from "../../lib/art2pal/palette";
import { barMockData, densityMockData, heatmapMockData, umapMockData } from "../../lib/art2pal/preview";

type ScientificPreviewProps = {
  palettes: {
    categorical: GeneratedPalette;
    sequential: GeneratedPalette;
    diverging: GeneratedPalette;
    neutral: GeneratedPalette;
  };
};

type DensityPoint = {
  x: number;
  y: number;
};

const WIDTH = 560;
const HEIGHT = 320;
const MARGIN = { top: 42, right: 42, bottom: 52, left: 58 };
const INNER_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const INNER_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;

function pick(colors: string[], index: number): string {
  return colors[index % colors.length] ?? "#4f6d5f";
}

function axisColor(neutral: string[]): string {
  return neutral[3] ?? "#6f746c";
}

function ChartFrame({
  palettes,
  label,
  children,
}: Pick<ScientificPreviewProps, "palettes"> & {
  label: string;
  children: React.ReactNode;
}) {
  const axis = axisColor(palettes.neutral.colors);

  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={label} className="h-full w-full">
      <rect width={WIDTH} height={HEIGHT} fill={palettes.neutral.colors[0] ?? "#fbf9f2"} />
      <g transform={`translate(${MARGIN.left} ${MARGIN.top})`}>
        <line x1="0" y1={INNER_HEIGHT} x2={INNER_WIDTH} y2={INNER_HEIGHT} stroke={axis} strokeOpacity="0.45" />
        <line x1="0" y1="0" x2="0" y2={INNER_HEIGHT} stroke={axis} strokeOpacity="0.45" />
        {d3.ticks(0, 1, 4).map((tick) => (
          <line key={tick} x1="0" x2={INNER_WIDTH} y1={INNER_HEIGHT - tick * INNER_HEIGHT} y2={INNER_HEIGHT - tick * INNER_HEIGHT} stroke={axis} strokeOpacity="0.12" />
        ))}
        {children}
      </g>
    </svg>
  );
}

function UmapPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const x = d3.scaleLinear().domain(d3.extent(umapMockData, (point) => point.x) as [number, number]).nice().range([0, INNER_WIDTH]);
  const y = d3.scaleLinear().domain(d3.extent(umapMockData, (point) => point.y) as [number, number]).nice().range([INNER_HEIGHT, 0]);
  const color = d3.scaleOrdinal<number, string>().domain(d3.range(palettes.categorical.colors.length)).range(palettes.categorical.colors);
  const axis = axisColor(palettes.neutral.colors);

  return (
    <ChartFrame palettes={palettes} label="UMAP preview using categorical palette">
      {umapMockData.map((point, index) => (
        <circle key={index} cx={x(point.x)} cy={y(point.y)} r="4.2" fill={color(point.group)} fillOpacity="0.88" />
      ))}
      <text x="0" y={INNER_HEIGHT + 30} fill={axis} fontSize="13" fontWeight="700">
        UMAP 1
      </text>
      <text x="-36" y="-30" fill={axis} fontSize="13" fontWeight="700" transform="rotate(-90 -36 -30)">
        UMAP 2
      </text>
    </ChartFrame>
  );
}

function HeatmapPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const rows = heatmapMockData.length;
  const columns = heatmapMockData[0]?.length ?? 0;
  const x = d3.scaleBand<number>().domain(d3.range(columns)).range([16, INNER_WIDTH - 16]).padding(0.04);
  const y = d3.scaleBand<number>().domain(d3.range(rows)).range([6, INNER_HEIGHT - 28]).padding(0.04);
  const color = d3.scaleQuantize<string>().domain([-1, 1]).range(palettes.diverging.colors);
  const axis = axisColor(palettes.neutral.colors);

  return (
    <ChartFrame palettes={palettes} label="Heatmap preview using diverging palette">
      {heatmapMockData.flatMap((row, rowIndex) =>
        row.map((value, columnIndex) => (
          <rect
            key={`${rowIndex}-${columnIndex}`}
            x={x(columnIndex)}
            y={y(rowIndex)}
            width={x.bandwidth()}
            height={y.bandwidth()}
            fill={color(value)}
          />
        ))
      )}
      <text x="16" y={INNER_HEIGHT + 30} fill={axis} fontSize="13" fontWeight="700">
        centered effect size
      </text>
    </ChartFrame>
  );
}

function DensityPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const x = d3.scaleLinear().domain([0, 1]).range([0, INNER_WIDTH]);
  const y = d3.scaleLinear().domain([0, d3.max(densityMockData, (point) => point.y) ?? 1]).nice().range([INNER_HEIGHT, 0]);
  const line = d3.line<DensityPoint>().x((point) => x(point.x)).y((point) => y(point.y)).curve(d3.curveMonotoneX);
  const area = d3.area<DensityPoint>().x((point) => x(point.x)).y0(INNER_HEIGHT).y1((point) => y(point.y)).curve(d3.curveMonotoneX);
  const axis = axisColor(palettes.neutral.colors);

  return (
    <ChartFrame palettes={palettes} label="Feature density preview using sequential palette">
      <path d={area(densityMockData) ?? undefined} fill={palettes.sequential.colors[3]} fillOpacity="0.34" />
      <path d={line(densityMockData) ?? undefined} fill="none" stroke={palettes.sequential.colors.at(-1) ?? "#206543"} strokeWidth="4" strokeLinecap="round" />
      <text x="0" y={INNER_HEIGHT + 30} fill={axis} fontSize="13" fontWeight="700">
        expression value
      </text>
    </ChartFrame>
  );
}

function BarPreview({ palettes }: Pick<ScientificPreviewProps, "palettes">) {
  const x = d3.scaleBand<number>().domain(d3.range(barMockData.length)).range([20, INNER_WIDTH - 20]).padding(0.42);
  const y = d3.scaleLinear().domain([0, 1]).range([INNER_HEIGHT, 0]);
  const axis = axisColor(palettes.neutral.colors);

  return (
    <ChartFrame palettes={palettes} label="Bar plot preview using categorical palette">
      {barMockData.map((value, index) => (
        <rect
          key={index}
          x={x(index)}
          y={y(value)}
          width={x.bandwidth()}
          height={INNER_HEIGHT - y(value)}
          fill={pick(palettes.categorical.colors, index)}
        />
      ))}
      <text x="0" y={INNER_HEIGHT + 30} fill={axis} fontSize="13" fontWeight="700">
        experimental group
      </text>
    </ChartFrame>
  );
}

export function ScientificPreview({ palettes }: ScientificPreviewProps) {
  const previews = [
    {
      id: "umap",
      label: "UMAP scatter",
      description: "Categorical palette for clusters or cell types.",
      chart: <UmapPreview palettes={palettes} />,
    },
    {
      id: "heatmap",
      label: "Heatmap",
      description: "Diverging palette for centered continuous values.",
      chart: <HeatmapPreview palettes={palettes} />,
    },
    {
      id: "density",
      label: "Feature density",
      description: "Sequential palette for expression or probability.",
      chart: <DensityPreview palettes={palettes} />,
    },
    {
      id: "bar",
      label: "Bar plot",
      description: "Categorical palette for grouped summaries.",
      chart: <BarPreview palettes={palettes} />,
    },
  ];

  return (
    <section className="sp-panel sp-lift mt-8 rounded-lg p-5">
      <div className="mb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4f6d5f]">Scientific preview</p>
          <h2 className="font-display mt-1 text-3xl font-bold tracking-[-0.02em] text-[#212c33]">Publication-style mock plots</h2>
          <p className="mt-1 text-sm leading-6 text-[rgb(33_44_51_/_0.66)]">
            All previews use D3 scales and generated SVG marks with the same neutral figure styling.
          </p>
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {previews.map((preview) => (
          <article key={preview.id} className="overflow-hidden rounded-lg border border-[#dadcd6] bg-[rgb(251_249_242_/_0.76)]">
            <div className="border-b border-[#dadcd6] px-4 py-3">
              <h3 className="font-display text-xl font-bold tracking-[-0.01em] text-[#212c33]">{preview.label}</h3>
              <p className="mt-0.5 text-xs font-semibold leading-5 text-[rgb(33_44_51_/_0.58)]">{preview.description}</p>
            </div>
            <div className="aspect-[7/4] overflow-hidden">{preview.chart}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
