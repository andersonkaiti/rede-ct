import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function Artigos() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Artigos</PageTitle>
        <CreateButton href="/area-restrita/artigos/cadastrar">
          Cadastrar Artigo
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Artigos</PageMain>
    </PageContainer>
  );
}
