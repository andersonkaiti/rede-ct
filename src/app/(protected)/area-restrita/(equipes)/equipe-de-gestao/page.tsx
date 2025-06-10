import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";
import EquipeDeGestaoTable from "./_components/table/table";

export default function EquipeDeGestao() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Equipe de Gestão</Container.PageTitle>
        <CreateButton href="/area-restrita/equipe-de-gestao/cadastrar">
          Criar Equipe de Gestão
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>
        <EquipeDeGestaoTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
