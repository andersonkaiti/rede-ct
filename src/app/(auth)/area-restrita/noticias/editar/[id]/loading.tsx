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
          <div className="h-76 w-full rounded-md bg-gray-200" />
        </Skeleton>

        <Button type="submit" className="cursor-pointer">
          Editar notícia
        </Button>
      </main>
    </div>
  );
}
