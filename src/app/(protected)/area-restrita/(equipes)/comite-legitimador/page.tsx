import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateComiteLegitimadorButton } from "./_components/create-member/create-team-button";
import { ComiteLegitimadorTable } from "./_components/table/table";

export default function ComiteLegitimador() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Comitê Legitimador</Container.PageTitle>
        <CreateComiteLegitimadorButton>
          Adicionar membro
        </CreateComiteLegitimadorButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar comitê" className="w-full sm:w-fit" />
      <Container.PageMain>
        <ComiteLegitimadorTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
