"use client";

import { cn } from "@/utils/cn";
import { useCopyClipboard } from "@hooks/copy-clipboard.hook";
import { Check, Copy as CopyIcon } from "lucide-react";

export interface ICopyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode;
}

export function Copy({ children, className, ...props }: ICopyProps) {
  const { copyToClipboard, isCopied } = useCopyClipboard(children as string);

  return (
    <div className={cn("cursor-pointer", className)} onClick={copyToClipboard}>
      {children}
      {isCopied ? (
        <Check className="ml-2 inline h-4 w-4" />
      ) : (
        <CopyIcon
          onClick={copyToClipboard}
          className={cn("ml-2 inline h-4 w-4", className)}
          {...props}
        />
      )}
    </div>
  );
}
