import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";
import { FilterInput } from "../_components/filter-input";

export default function HistoricoDeContribuicoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Histórico de Contribuições</PageTitle>
          <PageDescription>
            Visualize o seu histórico de contribuições
          </PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateButton href="/area-restrita/historico-de-contribuicoes/cadastrar">
          Cadastrar Histórico de Contribuições
        </CreateButton>
      </PageHeader>

      <PageMain>Histórico de Contribuições</PageMain>
    </PageContainer>
  );
}
