import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateMemberButton } from "./_components/create-member/create-member-button";
import { ComiteLegitimadorTable } from "./_components/table/table";

export default function ComiteLegitimador() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Comitê Legitimador</Container.PageTitle>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar comitê" className="w-full sm:w-fit" />
      <Container.PageMain>
        <ComiteLegitimadorTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
