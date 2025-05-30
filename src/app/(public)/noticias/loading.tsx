import { Skeleton } from "@components/ui/skeleton";

export default function Loading() {
  return (
    <Skeleton>
      <main className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-14">
        <div className="h-12 w-41.5 rounded-full bg-gray-200" />
        <div className="h-9 w-full rounded-md bg-gray-200 sm:w-54" />
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex h-fit w-full flex-col gap-4 rounded-md shadow-md"
            >
              <div className="flex h-60 w-full items-center justify-center rounded-t-md bg-gray-300">
                <svg
                  className="h-10 w-10 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div className="flex w-full grow flex-col justify-between gap-4 p-4">
                <div className="flex items-center gap-2">
                  <div className="size-4 rounded-full bg-gray-200" />
                  <div className="h-4 w-52.5 rounded-full bg-gray-200" />
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="h-4.5 w-full rounded-full bg-gray-200" />
                    <div className="h-4.5 w-2/3 rounded-full bg-gray-200" />
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <div className="h-3.5 w-full rounded-full bg-gray-200" />
                    <div className="h-3.5 w-2/3 rounded-full bg-gray-200" />
                    <div className="h-3.5 w-3/4 rounded-full bg-gray-200" />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <div className="size-6 rounded-full bg-gray-200" />
                  <div className="h-4.5 w-20 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mx-auto flex h-9 w-73 items-center justify-between gap-2">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="h-9 w-10 rounded-md bg-gray-200" />
        ))}
      </div> */}
      </main>
    </Skeleton>
  );
}
