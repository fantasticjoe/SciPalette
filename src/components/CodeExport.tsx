import { useState } from "react";
import type { Palette } from "../lib/types";
import { Code2 } from "lucide-react";
import {
  generatePythonCode,
  generateRCode,
  generateScanpyCode,
  generateSeuratCode,
  generateGraphPadCode,
  generateHexList,
} from "../lib/palette-utils";
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
        <h3 className="font-display inline-flex items-center gap-2 text-2xl font-bold tracking-[-0.02em] text-[#212c33]">
          <Code2 className="h-5 w-5 text-[#4f6d5f]" aria-hidden="true" />
          Export Code
        </h3>
        <CopyButton text={code} />
      </div>

      <div className="flex flex-wrap gap-2 border-b border-[#dadcd6]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-bold transition-colors ${
              activeTab === tab.id
                ? "border-[#4f6d5f] text-[#2f453d]"
                : "border-transparent text-[rgb(33_44_51_/_0.58)] hover:border-[rgb(79_109_95_/_0.26)] hover:text-[#212c33]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <pre className="overflow-x-auto rounded-md border border-[#dadcd6] bg-[rgb(248_245_236_/_0.78)] p-4 font-mono text-sm leading-6 text-[#212c33] shadow-inner">
          {code}
        </pre>
      </div>
    </div>
  );
}
