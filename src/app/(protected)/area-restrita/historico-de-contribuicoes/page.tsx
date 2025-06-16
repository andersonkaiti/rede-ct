import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function HistoricoDeContribuicoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Histórico de Contribuições</PageTitle>
        <CreateButton href="/area-restrita/historico-de-contribuicoes/cadastrar">
          Cadastrar Histórico de Contribuições
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Histórico de Contribuições</PageMain>
    </PageContainer>
  );
}
