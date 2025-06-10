import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Pendencias() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Pendências</Container.PageTitle>
        <CreateButton href="/area-restrita/pendencias/cadastrar">
          Cadastrar Pendência
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Pendências</Container.PageMain>
    </Container.PageContainer>
  );
}
