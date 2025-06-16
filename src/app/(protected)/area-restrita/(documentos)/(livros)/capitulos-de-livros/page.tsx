import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function CapitulosDeLivros() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Capítulos de Livros</PageTitle>
        <CreateButton href="/area-restrita/capitulos-de-livros/cadastrar">
          Cadastrar Capítulo de Livro
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Capítulos de Livros</PageMain>
    </PageContainer>
  );
}
