import {
  PageActionsContainer,
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { FilterInput } from "../../_components/filter-input";
import { CreateMemberButton } from "./_components/create-member/create-member-button";
import { Table } from "./_components/table/table";

export default function EquipeSDHC() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Equipe SDHC</PageTitle>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  );
}
