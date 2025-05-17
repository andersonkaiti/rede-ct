import type { LucideIcon } from "lucide-react";

export type NavigationLink =
  | {
      path: string;
      label: string;
      icon: LucideIcon;
      children?: never;
    }
  | {
      path?: never;
      label: string;
      icon?: never;
      children: Navigation[];
    };
