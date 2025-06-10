import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function CapitulosDeLivros() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Capítulos de Livros</Container.PageTitle>
        <CreateButton href="/area-restrita/capitulos-de-livros/cadastrar">
          Cadastrar Capítulo de Livro
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Capítulos de Livros</Container.PageMain>
    </Container.PageContainer>
  );
}
