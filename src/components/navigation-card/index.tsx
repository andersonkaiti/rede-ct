import { LinkProps } from "next/link";
import { BlueNavigationCard } from "./blue-navigation-card";
import { NavigationCardRoot } from "./navigation-card";

export interface INavigationCardProps
  extends LinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export const NavigationCard = {
  Root: NavigationCardRoot,
  BlueRoot: BlueNavigationCard,
};
