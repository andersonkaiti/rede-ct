import { BackArrow } from "@components/back-arrow";
import { SkeletonCards } from "@components/skeleton/skeleton-cards";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicEquipeSdhc = dynamic(() =>
  import("./equipe-sdhc").then((m) => m.EquipeSdhc),
);

export default async function EquipeSdhc() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
      <BackArrow />
      <h1 className="title-2">
        Atual equipe de gestão da associação Social Desenvolvimento Humano e
        Comunitário:
      </h1>
      <Suspense fallback={<SkeletonCards />}>
        <DynamicEquipeSdhc />
      </Suspense>
    </main>
  );
}
