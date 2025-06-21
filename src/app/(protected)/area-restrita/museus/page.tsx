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

export default function Museus() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Museus</PageTitle>
          <PageDescription>Gerencie os museus</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/museus/cadastrar">
          Cadastrar Museu
        </CreateButton>
      </PageHeader>

      <PageMain>Museus</PageMain>
    </PageContainer>
  );
}
