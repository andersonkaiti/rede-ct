import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function Artigos() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Artigos</Container.PageTitle>
        <CreateButton href="/area-restrita/artigos/cadastrar">
          Cadastrar Artigo
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Artigos</Container.PageMain>
    </Container.PageContainer>
  );
}
