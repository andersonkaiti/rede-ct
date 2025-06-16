import { Skeleton } from "@components/ui/skeleton";
import { ImageIcon } from "lucide-react";

export function LoadingSkeleton() {
  return (
    <Skeleton className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center justify-center gap-8 py-6"
        >
          <div className="flex size-30 items-center justify-center rounded-full bg-gray-300 ring-4 ring-gray-200">
            <ImageIcon className="size-10 text-gray-200" />
          </div>

          <div className="flex w-full flex-grow flex-col items-center justify-between gap-5">
            <div className="h-6.5 w-full rounded-full bg-gray-300" />
            <div className="h-6 w-46 rounded-full bg-gray-300" />
            <div className="w-full space-y-1">
              <div className="h-3.5 w-full rounded-full bg-gray-300" />
              <div className="h-3.5 w-full rounded-full bg-gray-300" />
              <div className="mx-auto h-3.5 w-2/3 rounded-full bg-gray-300" />
              <div className="mx-auto h-3.5 w-1/2 rounded-full bg-gray-300" />
            </div>

            <div className="mt-3 border-t border-slate-100 pt-4">
              <div className="h-4 w-58 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      ))}
    </Skeleton>
  );
}
