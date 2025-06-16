import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { CreateButton } from "../../_components/create-button";
import { LoadingSkeleton } from "./_components/loading-skeleton";

const DynamicCertificados = dynamic(() =>
  import("./_components/certificados").then((m) => m.Certificados),
);

export default function Certificados() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Certificados</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/certificados/cadastrar">
          Cadastrar certificado
        </CreateButton>
      </PageHeader>
      <Input placeholder="Buscar" className="w-full sm:w-fit" />
      <PageMain>
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicCertificados />
        </Suspense>
      </PageMain>
    </PageContainer>
  );
}
