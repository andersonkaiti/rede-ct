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

export default function RegimentosEAtas() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Regimentos e Atas</PageTitle>
          <PageDescription>Gerencie os regimentos e atas</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/regimentos-e-atas/cadastrar">
          Cadastrar Regimento
        </CreateButton>
      </PageHeader>

      <PageMain>Regimentos e Atas</PageMain>
    </PageContainer>
  );
}
