import {
  PageActionsContainer,
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";
import { FilterInput } from "../_components/filter-input";

export default function DestaquesRedeCT() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Destaques da RedeCT</PageTitle>
          <PageHeaderContent>Gerencie os Destaques da RedeCT</PageHeaderContent>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/destaques-redect/cadastrar">
          Cadastrar destaque
        </CreateButton>
      </PageHeader>

      <PageMain>Destaques da RedeCT</PageMain>
    </PageContainer>
  );
}
