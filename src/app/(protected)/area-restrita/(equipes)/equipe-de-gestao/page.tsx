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
import Table from "./_components/table/table";

export default function EquipeDeGestao() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Equipe de Gestão</PageTitle>
          <PageDescription>Gerencie as equipes de gestão</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/equipe-de-gestao/cadastrar">
          Criar Equipe de Gestão
        </CreateButton>
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  );
}
