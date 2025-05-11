import { OrderedListRoot } from "./ordered-list";
import { OrderedListItem } from "./ordered-list-item";

export interface IOrderedListProps
  extends Pick<React.HTMLAttributes<HTMLOListElement>, "className"> {
  children: React.ReactNode;
}

export const OrderedList = {
  Root: OrderedListRoot,
  Item: OrderedListItem,
};
