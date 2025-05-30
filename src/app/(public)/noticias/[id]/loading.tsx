import { Skeleton } from "@components/ui/skeleton";

export default function Loading() {
  return (
    <Skeleton>
      <main className="mx-auto my-10 flex w-full max-w-5xl flex-col justify-center gap-7 p-5 py-8">
        <header className="space-y-8">
          <div className="mt-2 h-10 w-full rounded-full bg-gray-300" />

          <div className="flex items-center justify-between">
            <div className="space-y-4 text-sm">
              <time className="flex items-center gap-x-1">
                <div className="h-4 w-66 rounded-full bg-gray-300" />
              </time>

              <div className="h-4 w-30 rounded-full bg-gray-300" />
            </div>
            <div className="size-9 rounded-full bg-gray-300" />
          </div>
        </header>

        <picture className="h-88 w-full">
          <div className="h-full w-full rounded-md bg-gray-300" />
        </picture>

        <div className="space-y-4">
          <div className="h-5 w-full rounded-full bg-gray-300" />
          <div className="h-5 w-2/3 rounded-full bg-gray-300" />
        </div>
      </main>
    </Skeleton>
  );
}
