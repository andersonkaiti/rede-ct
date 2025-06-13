import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { CreateButton } from "../../_components/create-button";
import { LoadingSkeleton } from "./_components/loading-skeleton";

const DynamicCertificados = dynamic(() =>
  import("./_components/certificados").then((m) => m.Certificados),
);

export default function Certificados() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Certificados</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/certificados/cadastrar">
          Cadastrar certificado
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Buscar" className="w-full sm:w-fit" />
      <Container.PageMain>
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicCertificados />
        </Suspense>
      </Container.PageMain>
    </Container.PageContainer>
  );
}
