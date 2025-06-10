import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateMemberButton } from "./_components/create-member/create-member-button";
import { EquipeSDHCTable } from "./_components/table/table";

export default function EquipeSDHC() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Equipe SDHC</Container.PageTitle>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar equipe" className="w-full sm:w-fit" />
      <Container.PageMain>
        <EquipeSDHCTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
