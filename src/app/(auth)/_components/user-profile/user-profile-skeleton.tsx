import { Skeleton } from "@components/skeleton";
import { User } from "lucide-react";

export function UserProfileSkeleton() {
  return (
    <Skeleton.Root className="flex items-center justify-between gap-2 px-2">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700">
          <User className="h-5 w-5 text-gray-200 dark:text-gray-600" />
        </div>
        <Skeleton.Text className="h-4 w-24" />
      </div>
      <Skeleton.Circle className="h-4 w-2" />
    </Skeleton.Root>
  );
}
