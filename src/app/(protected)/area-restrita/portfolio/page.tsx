import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";
import { FilterInput } from "../_components/filter-input";

export default function Portfolio() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Portfólio</PageTitle>
          <PageDescription>Gerencie o seu portfólio</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/portfolio/cadastrar">
          Cadastrar publicação
        </CreateButton>
      </PageHeader>

      <PageMain>Portfólio</PageMain>
    </PageContainer>
  );
}
