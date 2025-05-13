import { cn } from "@lib/utils";
import { IOrderedListProps } from ".";

export function OrderedListItem({ children, className }: IOrderedListProps) {
  return <li className={cn("text-justify", className)}>{children}</li>;
}
