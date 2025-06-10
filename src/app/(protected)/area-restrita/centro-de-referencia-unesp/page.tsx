import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function CentroDeReferenciaUnesp() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Centro de Referência UNEP</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/centro-de-referencia-unesp/cadastrar">
          Cadastrar edital
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Centro de Referência UNEP</Container.PageMain>
    </Container.PageContainer>
  );
}
