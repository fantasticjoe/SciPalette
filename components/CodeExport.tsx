"use client";

import { useState } from "react";
import { Palette } from "@/lib/types";
import {
  generatePythonCode,
  generateRCode,
  generateScanpyCode,
  generateSeuratCode,
  generateGraphPadCode,
  generateHexList,
} from "@/lib/palette-utils";
import { CopyButton } from "./CopyButton";

interface CodeExportProps {
  palette: Palette;
}

type CodeTab = "hex" | "python" | "r" | "scanpy" | "seurat" | "graphpad";

export function CodeExport({ palette }: CodeExportProps) {
  const [activeTab, setActiveTab] = useState<CodeTab>("hex");

  const tabs: { id: CodeTab; label: string }[] = [
    { id: "hex", label: "HEX" },
    { id: "python", label: "Python" },
    { id: "r", label: "R" },
    { id: "scanpy", label: "Scanpy" },
    { id: "seurat", label: "Seurat" },
    { id: "graphpad", label: "GraphPad" },
  ];

  const getCode = () => {
    switch (activeTab) {
      case "hex":
        return generateHexList(palette.colors);
      case "python":
        return generatePythonCode(palette.colors);
      case "r":
        return generateRCode(palette.colors);
      case "scanpy":
        return generateScanpyCode(palette.colors, palette.name);
      case "seurat":
        return generateSeuratCode(palette.colors);
      case "graphpad":
        return generateGraphPadCode(palette.colors);
      default:
        return "";
    }
  };

  const code = getCode();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Export Code</h3>
        <CopyButton text={code} />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
              activeTab === tab.id
                ? "border-gray-900 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className="relative">
        <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto text-sm font-mono text-gray-800 border border-gray-200">
          {code}
        </pre>
      </div>
    </div>
  );
}
