import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";
import EquipeDeGestaoTable from "./_components/table/table";

export default function EquipeDeGestao() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Equipe de Gestão</PageTitle>
        <CreateButton href="/area-restrita/equipe-de-gestao/cadastrar">
          Criar Equipe de Gestão
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>
        <EquipeDeGestaoTable />
      </PageMain>
    </PageContainer>
  );
}
