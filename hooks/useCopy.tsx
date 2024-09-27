"use client";

import { useCallback, useState } from "react";

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>;

export const useCopy = (): [CopiedValue, CopyFn, boolean] => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);
  const [isCopied, setIsCopied] = useState(false);
  const copy: CopyFn = useCallback(async (text) => {
    if (!navigator.clipboard) {
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
        setCopiedText(null);
      }, 2000);

      return true;
    } catch (error) {
      setCopiedText(null);
      setIsCopied(false);
      return false;
    }
  }, []);
  return [copiedText, copy, isCopied];
};
