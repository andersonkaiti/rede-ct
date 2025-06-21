import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";
import { FilterInput } from "../../../_components/filter-input";

export default function CapitulosDeLivros() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Capítulos de Livros</PageTitle>
          <PageDescription>Gerencie os seus livros</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/capitulos-de-livros/cadastrar">
          Cadastrar Livro
        </CreateButton>
      </PageHeader>

      <PageMain>Livros</PageMain>
    </PageContainer>
  );
}
