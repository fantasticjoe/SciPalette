import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-[14px] px-3 py-1.5 text-sm font-semibold transition-colors",
        "border border-[#dadcd6] bg-[rgb(251_249_242_/_0.88)] text-[#212c33] hover:border-[rgb(79_109_95_/_0.32)] hover:bg-[rgb(122_158_141_/_0.12)]",
        "focus:outline-none focus:ring-2 focus:ring-[rgb(79_109_95_/_0.28)] focus:ring-offset-2 focus:ring-offset-[#f8f5ec]",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4" />
          Copied
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          Copy
        </>
      )}
    </button>
  );
}
