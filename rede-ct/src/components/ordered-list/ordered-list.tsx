import { IOrderedListProps } from ".";

export function OrderedListRoot({ children }: IOrderedListProps) {
  return (
    <ol className="custom-marker ml-10 list-decimal space-y-4">{children}</ol>
  );
}
