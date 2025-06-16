import { Skeleton } from "@components/ui/skeleton";
import { ImageIcon } from "lucide-react";

export function LoadingSkeleton() {
  return (
    <Skeleton className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center justify-center gap-8 p-6"
        >
          <div className="flex size-30 items-center justify-center rounded-full bg-gray-300 ring-4 ring-gray-200">
            <ImageIcon className="size-10 text-gray-200" />
          </div>

          <div className="flex w-full flex-grow flex-col items-center justify-between gap-2">
            <div className="h-7 w-full rounded-full bg-gray-300" />
            <div className="h-6.5 w-full rounded-full bg-gray-300" />
            <div className="h-9 w-46 rounded-md bg-gray-300" />
          </div>
        </div>
      ))}
    </Skeleton>
  );
}
