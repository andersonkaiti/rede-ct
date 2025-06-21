import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { FilterInput } from "../../_components/filter-input";
import { CreateResearcherButton } from "./create-researcher/create-researcher-button";

export default function PesquisadoresParticipantes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pesquisadores Participantes</PageTitle>
          <PageDescription>Gerencie os pesquisadores da RedeCT</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateResearcherButton />
      </PageHeader>

      <PageMain>Pesquisadores Participantes</PageMain>
    </PageContainer>
  );
}
