import { useCopy } from "@/hooks/useCopy";
import { ClipboardIcon, Copy } from "lucide-react";
import React from "react";
import { Button } from "./button";

function CopyButton({ text }: { text: string }) {
  const [, copy, isCopied] = useCopy();
  if (!text.trim()) return;
  return (
    <Button variant="outline" onClick={() => copy(text)}>
      {isCopied ? (
        <Copy className="w-4 h-4" />
      ) : (
        <ClipboardIcon className="h-4 w-4" />
      )}
    </Button>
  );
}

export default CopyButton;
