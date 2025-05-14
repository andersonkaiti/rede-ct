import { Skeleton } from "@components/skeleton";

export default function EquipeDeGestaoLoading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <section className="space-y-8 md:space-y-14">
        <Skeleton.Title className="h-12 w-full" />
        <Skeleton.Root className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          {[...Array(9)].map((_, index) => (
            <Skeleton.Root
              key={index}
              className="flex flex-1 flex-col justify-center gap-4"
            >
              <Skeleton.Image className="h-48 w-48 rounded-full" />
              <Skeleton.Title className="h-7 w-full" />
              <Skeleton.Text className="h-4 w-full" />
              <Skeleton.Button className="h-10 w-full" />
            </Skeleton.Root>
          ))}
        </Skeleton.Root>
      </section>
    </div>
  );
}
