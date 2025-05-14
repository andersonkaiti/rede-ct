import { Skeleton } from ".";

export function SkeletonCards() {
  return (
    <Skeleton.Root className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col items-center justify-center gap-4"
        >
          <Skeleton.Image className="h-48 w-48 rounded-full" />
          <Skeleton.Title className="h-7 w-full" />
          <Skeleton.Text className="h-4 w-full" />
        </div>
      ))}
    </Skeleton.Root>
  );
}
