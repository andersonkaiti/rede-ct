import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function Revistas() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Revistas</Container.PageTitle>
        <CreateButton href="/area-restrita/revistas/cadastrar">
          Cadastrar Revista
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Revistas</Container.PageMain>
    </Container.PageContainer>
  );
}
