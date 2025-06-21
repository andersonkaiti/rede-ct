import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import { FilterInput } from "../../_components/filter-input";
import { CreateCertificationButton } from "./_components/create-certification/create-certification-button";
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
          <PageDescription>Visualize os seus certificados</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateCertificationButton />
      </PageHeader>

      <PageMain>
        <Suspense fallback={<LoadingSkeleton />}>
          <DynamicCertificados />
        </Suspense>
      </PageMain>
    </PageContainer>
  );
}
