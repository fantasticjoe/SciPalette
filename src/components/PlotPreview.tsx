import { useMemo } from "react";
import type { Palette } from "../lib/types";

interface PlotPreviewProps {
  palette: Palette;
  type: "bar" | "line" | "scatter" | "umap" | "heatmap" | "volcano";
}

function seededRandom(seed: number) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

export function PlotPreview({ palette, type }: PlotPreviewProps) {
  const colors = palette.colors;

  const barHeights = useMemo(() => colors.slice(0, 6).map((_, i) => 60 + seededRandom(i * 11) * 80), [colors]);
  const linePoints = useMemo(() => colors.slice(0, 4).map((_, i) =>
    Array.from({ length: 8 }, (_, j) => {
      const x = 60 + j * 40;
      const y = 40 + Math.sin(j * 0.5 + i) * 30 + i * 20;
      return `${x},${y}`;
    }).join(" ")
  ), [colors]);
  const scatterPositions = useMemo(() => colors.slice(0, 5).map((_, groupIdx) =>
    Array.from({ length: 20 }, (_, i) => {
      const x = 80 + groupIdx * 60 + (seededRandom(groupIdx * 100 + i * 3) - 0.5) * 40;
      const y = 60 + groupIdx * 15 + (seededRandom(groupIdx * 200 + i * 7 + 1) - 0.5) * 60;
      return { x, y };
    })
  ), [colors]);
  const umapData = useMemo(() => colors.map((_, clusterIdx) => {
    const centerX = 100 + (clusterIdx % 4) * 70 + (seededRandom(clusterIdx * 42) - 0.5) * 20;
    const centerY = 60 + Math.floor(clusterIdx / 4) * 60 + (seededRandom(clusterIdx * 87 + 1) - 0.5) * 20;
    const points = Array.from({ length: 30 }, (_, i) => {
      const angle = seededRandom(clusterIdx * 1000 + i * 17) * Math.PI * 2;
      const radius = seededRandom(clusterIdx * 1000 + i * 31 + 2) * 25;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
      };
    });
    return { centerX, centerY, points };
  }), [colors]);
  const volcanoPoints = useMemo(() =>
    Array.from({ length: 100 }, (_, i) => ({
      x: 60 + seededRandom(i * 73) * 280,
      y: 160 - seededRandom(i * 137 + 1) * 120,
    }))
  , []);

  if (type === "bar") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#333" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="160" stroke="#333" strokeWidth="1.5" />
        {colors.slice(0, 6).map((color, i) => (
          <rect key={i} x={60 + i * 50} y={160 - barHeights[i]} width="35" height={barHeights[i]} fill={color} opacity="0.9" />
        ))}
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">Expression</text>
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">Groups</text>
      </svg>
    );
  }

  if (type === "line") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#333" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="160" stroke="#333" strokeWidth="1.5" />
        {colors.slice(0, 4).map((color, i) => (
          <polyline key={i} points={linePoints[i]} fill="none" stroke={color} strokeWidth="2.5" opacity="0.9" />
        ))}
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">Value</text>
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">Time</text>
      </svg>
    );
  }

  if (type === "scatter") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#333" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="160" stroke="#333" strokeWidth="1.5" />
        {colors.slice(0, 5).map((color, groupIdx) => (
          <g key={groupIdx}>
            {scatterPositions[groupIdx].map(({ x, y }, i) => (
              <circle key={i} cx={x} cy={y} r="3.5" fill={color} opacity="0.7" />
            ))}
          </g>
        ))}
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">PC2</text>
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">PC1</text>
      </svg>
    );
  }

  if (type === "umap") {
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <rect x="40" y="20" width="320" height="140" fill="#fafafa" />
        {colors.map((color, clusterIdx) => (
          <g key={clusterIdx}>
            {umapData[clusterIdx].points.map(({ x, y }, i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill={color} opacity="0.6" />
            ))}
          </g>
        ))}
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">UMAP 1</text>
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">UMAP 2</text>
      </svg>
    );
  }

  if (type === "heatmap") {
    const rows = 8;
    const cols = 10;
    const cellWidth = 30;
    const cellHeight = 15;
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        {Array.from({ length: rows }, (_, i) =>
          Array.from({ length: cols }, (_, j) => {
            const colorIdx = Math.floor((i * cols + j) / (rows * cols) * colors.length);
            const color = colors[Math.min(colorIdx, colors.length - 1)];
            return (
              <rect key={`${i}-${j}`} x={50 + j * cellWidth} y={20 + i * cellHeight}
                width={cellWidth - 1} height={cellHeight - 1} fill={color} opacity="0.9" />
            );
          })
        )}
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">Samples</text>
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">Genes</text>
      </svg>
    );
  }

  if (type === "volcano") {
    const upColor = colors[colors.length - 1] || "#E64B35";
    const downColor = colors[0] || "#4DBBD5";
    const nsColor = colors[Math.floor(colors.length / 2)] || "#999999";
    return (
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        <line x1="200" y1="160" x2="200" y2="20" stroke="#ddd" strokeWidth="1" strokeDasharray="4" />
        <line x1="40" y1="160" x2="360" y2="160" stroke="#333" strokeWidth="1.5" />
        <line x1="40" y1="20" x2="40" y2="160" stroke="#333" strokeWidth="1.5" />
        {volcanoPoints.map(({ x, y }, i) => {
          const logFC = (x - 200) / 50;
          const pValue = (160 - y) / 40;
          let color = nsColor;
          if (Math.abs(logFC) > 1 && pValue > 1.3) {
            color = logFC > 0 ? upColor : downColor;
          }
          return <circle key={i} cx={x} cy={y} r="2.5" fill={color} opacity="0.6" />;
        })}
        <text x="200" y="185" fontSize="10" fill="#666" textAnchor="middle">log2 Fold Change</text>
        <text x="15" y="90" fontSize="10" fill="#666" transform="rotate(-90 15 90)">-log10 p-value</text>
      </svg>
    );
  }

  return null;
}
