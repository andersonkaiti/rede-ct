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

export default function PosGraduacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pós-Graduações</PageTitle>
          <PageDescription>Gerencie as pós-graduações</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/pos-graduacoes/cadastrar">
          Cadastrar Pós-Graduação
        </CreateButton>
      </PageHeader>

      <PageMain>Pós-Graduações</PageMain>
    </PageContainer>
  );
}
