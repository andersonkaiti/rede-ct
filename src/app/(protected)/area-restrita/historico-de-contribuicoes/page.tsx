import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function HistoricoDeContribuicoes() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Histórico de Contribuições</Container.PageTitle>
        <CreateButton href="/area-restrita/historico-de-contribuicoes/cadastrar">
          Cadastrar Histórico de Contribuições
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Histórico de Contribuições</Container.PageMain>
    </Container.PageContainer>
  );
}
