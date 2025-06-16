import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";
import { GrupoDePesquisaTable } from "./_components/table/table";

export default function GrupoDePesquisa() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Grupo de Pesquisa</PageTitle>
        <CreateButton href="/area-restrita/grupo-de-pesquisa/cadastrar">
          Criar Grupo de Pesquisa
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar grupo" className="w-full sm:w-fit" />
      <PageMain>
        <GrupoDePesquisaTable />
      </PageMain>
    </PageContainer>
  );
}
