import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function ParceirosEFinanciadores() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Parceiros e Financiadores</Container.PageTitle>
        <CreateButton href="/area-restrita/parceiros-e-financiadores/cadastrar">
          Cadastrar Parceiro
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Parceiros e Financiadores</Container.PageMain>
    </Container.PageContainer>
  );
}
