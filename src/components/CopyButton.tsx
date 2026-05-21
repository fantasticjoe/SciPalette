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
        "sp-button-secondary px-3 py-1.5 text-sm font-semibold",
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
