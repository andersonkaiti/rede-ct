import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Input } from "@components/ui/input";
import { Skeleton } from "@components/ui/skeleton";

const DynamicCertificados = dynamic(() =>
  import("./certificados").then((m) => m.Certificados),
);

export default function CertificadosPage() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-12.5">
      <h1 className="title-2">Certificados</h1>
      <Input placeholder="Buscar" className="w-full sm:w-fit" />
      <Suspense fallback={<LoadingSkeleton />}>
        <DynamicCertificados />
      </Suspense>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <section className="grid w-full grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <Skeleton
          key={index}
          className="h-fit w-full space-y-4 rounded-sm border border-gray-200 p-10 shadow-sm"
        >
          <div className="h-8 w-30 rounded-md bg-gray-200" />
          <div className="h-6.5 w-full rounded-md bg-gray-200" />
          <div className="h-6 w-26 rounded-md bg-gray-200" />
          <div className="h-9 max-w-40 rounded-md bg-gray-200" />
        </Skeleton>
      ))}
    </section>
  );
}
