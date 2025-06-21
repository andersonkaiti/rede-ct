import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";
import { FilterInput } from "../../../_components/filter-input";

export default function Revistas() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Revistas</PageTitle>
          <PageDescription>Gerencie as revistas</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/revistas/cadastrar">
          Cadastrar Revista
        </CreateButton>
      </PageHeader>

      <PageMain>Revistas</PageMain>
    </PageContainer>
  );
}
