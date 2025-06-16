import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateMemberButton } from "./_components/create-member/create-member-button";
import { EquipeSDHCTable } from "./_components/table/table";

export default function EquipeSDHC() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Equipe SDHC</PageTitle>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </PageHeader>
      <Input placeholder="Pesquisar equipe" className="w-full sm:w-fit" />
      <PageMain>
        <EquipeSDHCTable />
      </PageMain>
    </PageContainer>
  );
}
