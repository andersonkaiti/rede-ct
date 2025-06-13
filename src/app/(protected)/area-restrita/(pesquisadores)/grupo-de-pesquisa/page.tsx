import * as Container from "@components/ui/page-container";
import { Input } from "@components/ui/sidebar";

import { CreateButton } from "../../_components/create-button";
import { GrupoDePesquisaTable } from "./_components/table/table";

export default function GrupoDePesquisa() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Grupo de Pesquisa</Container.PageTitle>
        <CreateButton href="/area-restrita/grupo-de-pesquisa/cadastrar">
          Criar Grupo de Pesquisa
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar grupo" className="w-full sm:w-fit" />
      <Container.PageMain>
        <GrupoDePesquisaTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
