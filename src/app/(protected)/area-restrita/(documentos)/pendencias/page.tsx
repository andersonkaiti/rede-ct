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

export default function Pendencias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pendências</PageTitle>
          <PageDescription>Visualize as suas pendências</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/pendencias/cadastrar">
          Cadastrar Pendência
        </CreateButton>
      </PageHeader>

      <PageMain>Pendências</PageMain>
    </PageContainer>
  );
}
