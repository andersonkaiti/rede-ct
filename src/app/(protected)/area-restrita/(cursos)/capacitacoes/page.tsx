import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Capacitacoes() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Capacitações</Container.PageTitle>
        <CreateButton href="/area-restrita/capacitacoes/cadastrar">
          Cadastrar Capacitação
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Capacitações</Container.PageMain>
    </Container.PageContainer>
  );
}
