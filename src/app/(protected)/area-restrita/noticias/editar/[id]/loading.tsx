import { Button } from "@components/ui/button";
import { Skeleton } from "@components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-12.5">
      <header className="space-y-4">
        <h1 className="title-2">Editar Notícia</h1>
      </header>
      <main className="grid grid-cols-1 gap-4">
        <Skeleton className="grid grid-cols-1 gap-4">
          <div className="h-9 w-full rounded-md bg-gray-200" />
          <div className="h-9 w-full rounded-md bg-gray-200" />
          <div className="flex h-76 w-full items-center justify-center rounded-md bg-gray-300">
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
        </Skeleton>

        <Button type="submit" className="cursor-pointer">
          Editar notícia
        </Button>
      </main>
    </div>
  );
}
