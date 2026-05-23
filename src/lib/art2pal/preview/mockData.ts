export type PointDatum = {
  x: number;
  y: number;
  group: number;
  value: number;
};

export const umapMockData: PointDatum[] = Array.from({ length: 120 }, (_, index) => {
  const group = index % 8;
  const centerX = [-0.8, -0.35, 0.25, 0.8, -0.65, 0.55, -0.1, 0.15][group];
  const centerY = [-0.55, 0.55, -0.65, 0.35, 0.05, -0.08, 0.12, 0.72][group];
  const angle = (index * 137.5 * Math.PI) / 180;
  const radius = 0.08 + ((index % 11) / 11) * 0.16;

  return {
    x: centerX + Math.cos(angle) * radius,
    y: centerY + Math.sin(angle) * radius,
    group,
    value: (Math.sin(index * 0.35) + 1) / 2,
  };
});

export const heatmapMockData: number[][] = Array.from({ length: 9 }, (_, row) =>
  Array.from({ length: 13 }, (_, column) => {
    const wave = Math.sin(row * 0.9) + Math.cos(column * 0.65) + Math.sin((row + column) * 0.22);
    return Math.max(-1, Math.min(1, wave / 2.6));
  })
);

export const barMockData = [0.72, 0.48, 0.9, 0.58, 0.66, 0.82, 0.41, 0.76];

export const densityMockData = Array.from({ length: 48 }, (_, index) => {
  const x = index / 47;
  return {
    x,
    y: 0.1 + Math.exp(-((x - 0.32) ** 2) / 0.014) * 0.72 + Math.exp(-((x - 0.72) ** 2) / 0.024) * 0.42,
  };
});
