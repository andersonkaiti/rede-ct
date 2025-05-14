"use client";

import { useState } from "react";
import { toast } from "sonner";

export function useCopyClipboard(children: string) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(children as string);

    setIsCopied(true);

    toast("Copiado para a área de transferência!");

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return {
    copyToClipboard,
    isCopied,
  };
}
