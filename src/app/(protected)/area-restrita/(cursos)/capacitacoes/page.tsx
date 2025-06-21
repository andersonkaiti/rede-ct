import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";
import { FilterInput } from "../../_components/filter-input";

export default function Capacitacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Capacitações</PageTitle>
          <PageDescription>Gerencie as suas capacitações</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/capacitacoes/cadastrar">
          Cadastrar Capacitação
        </CreateButton>
      </PageHeader>

      <PageMain>Capacitações</PageMain>
    </PageContainer>
  );
}
