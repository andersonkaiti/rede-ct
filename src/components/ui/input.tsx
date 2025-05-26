import * as React from "react";

import { cn } from "@utils/cn";

function Input({
  className,
  type = "text",
  children,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      className={cn(
        "border-input relative flex h-9 w-full items-center rounded-md border bg-transparent px-3 py-1 shadow-xs transition-colors",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-2",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className,
      )}
    >
      <input
        type={type}
        data-slot="input"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground w-full bg-transparent text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        )}
        {...props}
      />
      {children && (
        <div className="text-muted-foreground ml-2 flex items-center">
          {children}
        </div>
      )}
    </div>
  );
}

export { Input };
