export function LoadingSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="flex w-full flex-col gap-6 rounded-lg border border-gray-200 p-6 shadow-lg"
        >
          <div className="mb-3.5 h-8 w-full rounded-full bg-gray-300" />

          <div className="space-y-1">
            <div className="h-5 w-full rounded-full bg-gray-300" />
            <div className="h-5 w-1/3 rounded-full bg-gray-300" />
          </div>

          <div className="space-y-3">
            <div className="h-4 w-full rounded-full bg-gray-300" />
            <div className="h-4 w-full rounded-full bg-gray-300" />
            <div className="h-4 w-full rounded-full bg-gray-300" />
            <div className="h-4 w-2/3 rounded-full bg-gray-300" />
          </div>

          <div className="h-7.5 w-1/3 rounded-full bg-gray-300" />

          <div className="h-9 w-full rounded-md bg-gray-300" />
        </div>
      ))}
    </div>
  );
}
