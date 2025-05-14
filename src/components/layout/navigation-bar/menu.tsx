"use client";

import { cn } from "@lib/utils";

export interface IMenuProps {
  showNavigationBar: boolean;
  setShowNavigationBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Menu({ showNavigationBar, setShowNavigationBar }: IMenuProps) {
  return (
    <div
      className="2lg:hidden z-50 flex h-10 w-9 cursor-pointer flex-col items-center justify-center"
      onClick={() => setShowNavigationBar(!showNavigationBar)}
    >
      <div
        className={cn(
          "h-[2px] w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-black transition-all duration-300",
          showNavigationBar && "rotate-[-45deg]",
        )}
      ></div>
      <div
        className={cn(
          "h-[2px] w-[50%] origin-center rounded-md bg-black transition-all duration-300",
          showNavigationBar && "hidden",
        )}
      ></div>
      <div
        className={cn(
          "h-[2px] w-[50%] origin-left -translate-y-[0.45rem] rounded-md bg-black transition-all duration-300",
          showNavigationBar && "rotate-[45deg]",
        )}
      ></div>
    </div>
  );
}
