"use client";

import { hexToRgb } from "@/lib/palette-utils";
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
        className="w-full h-20 rounded-lg shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: color }}
        title={color}
      />
      {showDetails && (
        <div className="mt-2 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-mono text-gray-700">{color}</span>
            <CopyButton text={color} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {rgb && (
            <p className="text-xs text-gray-500 font-mono">
              RGB({rgb.r}, {rgb.g}, {rgb.b})
            </p>
          )}
        </div>
      )}
    </div>
  );
}
