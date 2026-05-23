import { useMemo } from "react";
import * as d3 from "d3";
import type { Palette } from "../lib/types";

interface PlotPreviewProps {
  palette: Palette;
  type: "bar" | "line" | "scatter" | "umap" | "heatmap" | "volcano";
}

type Point = {
  x: number;
  y: number;
};

const WIDTH = 400;
const HEIGHT = 200;
const MARGIN = { top: 22, right: 32, bottom: 38, left: 44 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = HEIGHT - MARGIN.top - MARGIN.bottom;
const AXIS_COLOR = "#5f6860";
const GRID_COLOR = "rgb(95 104 96 / 0.18)";

function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

function pick(colors: string[], index: number): string {
  return colors[index % colors.length] ?? "#4f6d5f";
}

function PlotFrame({ children, xLabel, yLabel, background = "#fbf9f2" }: { children: React.ReactNode; xLabel: string; yLabel: string; background?: string }) {
  return (
    <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`${xLabel} by ${yLabel} preview`} className="h-auto w-full">
      <rect x="0" y="0" width={WIDTH} height={HEIGHT} fill={background} />
      <g transform={`translate(${MARGIN.left} ${MARGIN.top})`}>
        <line x1="0" y1={PLOT_HEIGHT} x2={PLOT_WIDTH} y2={PLOT_HEIGHT} stroke={AXIS_COLOR} strokeOpacity="0.62" />
        <line x1="0" y1="0" x2="0" y2={PLOT_HEIGHT} stroke={AXIS_COLOR} strokeOpacity="0.62" />
        {d3.ticks(0, 1, 4).map((tick) => (
          <line key={tick} x1="0" x2={PLOT_WIDTH} y1={PLOT_HEIGHT - tick * PLOT_HEIGHT} y2={PLOT_HEIGHT - tick * PLOT_HEIGHT} stroke={GRID_COLOR} />
        ))}
        {children}
      </g>
      <text x={MARGIN.left + PLOT_WIDTH / 2} y={184} fill={AXIS_COLOR} fontSize="10" fontWeight="700" textAnchor="middle">
        {xLabel}
      </text>
      <text x="15" y={MARGIN.top + PLOT_HEIGHT / 2} fill={AXIS_COLOR} fontSize="10" fontWeight="700" textAnchor="middle" transform={`rotate(-90 15 ${MARGIN.top + PLOT_HEIGHT / 2})`}>
        {yLabel}
      </text>
    </svg>
  );
}

export function PlotPreview({ palette, type }: PlotPreviewProps) {
  const colors = palette.colors;

  const barData = useMemo(() => colors.slice(0, 6).map((color, index) => ({ key: `G${index + 1}`, color, value: 0.35 + seededRandom(index * 17) * 0.58 })), [colors]);
  const lineSeries = useMemo(
    () =>
      colors.slice(0, 4).map((color, seriesIndex) => ({
        color,
        points: Array.from({ length: 9 }, (_, index) => ({
          x: index,
          y: 0.48 + Math.sin(index * 0.72 + seriesIndex * 0.9) * 0.2 + seriesIndex * 0.08,
        })),
      })),
    [colors]
  );
  const scatterData = useMemo(
    () =>
      colors.slice(0, 5).flatMap((color, groupIndex) =>
        Array.from({ length: 18 }, (_, pointIndex) => ({
          color,
          x: groupIndex + 0.5 + (seededRandom(groupIndex * 101 + pointIndex * 11) - 0.5) * 0.62,
          y: 0.18 + groupIndex * 0.14 + seededRandom(groupIndex * 149 + pointIndex * 7) * 0.42,
        }))
      ),
    [colors]
  );
  const umapData = useMemo(
    () =>
      colors.flatMap((color, clusterIndex) => {
        const centerX = (clusterIndex % 4) * 1.05 + (seededRandom(clusterIndex * 29) - 0.5) * 0.22;
        const centerY = Math.floor(clusterIndex / 4) * 0.86 + (seededRandom(clusterIndex * 41 + 3) - 0.5) * 0.22;

        return Array.from({ length: 22 }, (_, pointIndex) => {
          const angle = seededRandom(clusterIndex * 1000 + pointIndex * 17) * Math.PI * 2;
          const radius = seededRandom(clusterIndex * 1000 + pointIndex * 31 + 2) * 0.32;
          return {
            color,
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
          };
        });
      }),
    [colors]
  );
  const heatmapData = useMemo(
    () =>
      Array.from({ length: 8 }, (_, row) =>
        Array.from({ length: 10 }, (_, column) => ({
          row,
          column,
          value: (Math.sin(row * 0.85) + Math.cos(column * 0.65) + 2) / 4,
        }))
      ).flat(),
    []
  );
  const volcanoData = useMemo(
    () =>
      Array.from({ length: 120 }, (_, index) => {
        const x = -2.6 + seededRandom(index * 73) * 5.2;
        const y = seededRandom(index * 137 + 1) * 3.5;
        return { x, y };
      }),
    []
  );

  if (type === "bar") {
    const x = d3.scaleBand<string>().domain(barData.map((item) => item.key)).range([0, PLOT_WIDTH]).padding(0.28);
    const y = d3.scaleLinear().domain([0, 1]).range([PLOT_HEIGHT, 0]);

    return (
      <PlotFrame xLabel="Groups" yLabel="Expression">
        {barData.map((item) => (
          <rect key={item.key} x={x(item.key)} y={y(item.value)} width={x.bandwidth()} height={PLOT_HEIGHT - y(item.value)} fill={item.color} fillOpacity="0.9" />
        ))}
      </PlotFrame>
    );
  }

  if (type === "line") {
    const x = d3.scaleLinear().domain([0, 8]).range([0, PLOT_WIDTH]);
    const y = d3.scaleLinear().domain([0.08, 1.05]).range([PLOT_HEIGHT, 0]);
    const line = d3.line<Point>().x((point) => x(point.x)).y((point) => y(point.y)).curve(d3.curveMonotoneX);
    const area = d3.area<Point>().x((point) => x(point.x)).y0(PLOT_HEIGHT).y1((point) => y(point.y)).curve(d3.curveMonotoneX);

    return (
      <PlotFrame xLabel="Time" yLabel="Value">
        {lineSeries.map((series, index) => (
          <g key={index}>
            {index === 0 && <path d={area(series.points) ?? undefined} fill={series.color} fillOpacity="0.12" />}
            <path d={line(series.points) ?? undefined} fill="none" stroke={series.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        ))}
      </PlotFrame>
    );
  }

  if (type === "scatter") {
    const x = d3.scaleLinear().domain([0, 5]).range([0, PLOT_WIDTH]);
    const y = d3.scaleLinear().domain([0, 1.1]).range([PLOT_HEIGHT, 0]);

    return (
      <PlotFrame xLabel="PC1" yLabel="PC2">
        {scatterData.map((point, index) => (
          <circle key={index} cx={x(point.x)} cy={y(point.y)} r="3.2" fill={point.color} fillOpacity="0.68" />
        ))}
      </PlotFrame>
    );
  }

  if (type === "umap") {
    const xExtent = d3.extent(umapData, (point) => point.x) as [number, number];
    const yExtent = d3.extent(umapData, (point) => point.y) as [number, number];
    const x = d3.scaleLinear().domain(xExtent).nice().range([0, PLOT_WIDTH]);
    const y = d3.scaleLinear().domain(yExtent).nice().range([PLOT_HEIGHT, 0]);

    return (
      <PlotFrame xLabel="UMAP 1" yLabel="UMAP 2">
        {umapData.map((point, index) => (
          <circle key={index} cx={x(point.x)} cy={y(point.y)} r="2.4" fill={point.color} fillOpacity="0.65" />
        ))}
      </PlotFrame>
    );
  }

  if (type === "heatmap") {
    const x = d3.scaleBand<number>().domain(d3.range(10)).range([0, PLOT_WIDTH]).padding(0.04);
    const y = d3.scaleBand<number>().domain(d3.range(8)).range([0, PLOT_HEIGHT]).padding(0.04);
    const color = d3.scaleQuantize<string>().domain([0, 1]).range(colors);

    return (
      <PlotFrame xLabel="Samples" yLabel="Genes">
        {heatmapData.map((cell) => (
          <rect
            key={`${cell.row}-${cell.column}`}
            x={x(cell.column)}
            y={y(cell.row)}
            width={x.bandwidth()}
            height={y.bandwidth()}
            fill={color(cell.value)}
            fillOpacity="0.92"
          />
        ))}
      </PlotFrame>
    );
  }

  if (type === "volcano") {
    const x = d3.scaleLinear().domain([-3, 3]).range([0, PLOT_WIDTH]);
    const y = d3.scaleLinear().domain([0, 3.7]).range([PLOT_HEIGHT, 0]);
    const upColor = colors[colors.length - 1] || "#E64B35";
    const downColor = colors[0] || "#4DBBD5";
    const nsColor = colors[Math.floor(colors.length / 2)] || "#999999";

    return (
      <PlotFrame xLabel="log2 Fold Change" yLabel="-log10 p-value">
        <line x1={x(0)} y1="0" x2={x(0)} y2={PLOT_HEIGHT} stroke={GRID_COLOR} strokeDasharray="4 4" />
        {volcanoData.map((point, index) => {
          const significant = Math.abs(point.x) > 1 && point.y > 1.3;
          const fill = significant ? (point.x > 0 ? upColor : downColor) : nsColor;
          return <circle key={index} cx={x(point.x)} cy={y(point.y)} r="2.4" fill={fill} fillOpacity={significant ? 0.72 : 0.46} />;
        })}
      </PlotFrame>
    );
  }

  return null;
}
