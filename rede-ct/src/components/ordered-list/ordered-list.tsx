import { IOrderedListProps } from ".";

export function OrderedListRoot({ children }: IOrderedListProps) {
  return (
    <div className="w-full">
      <ol className="custom-marker ml-10 list-decimal space-y-4 break-all">
        {children}
      </ol>
    </div>
  );
}
