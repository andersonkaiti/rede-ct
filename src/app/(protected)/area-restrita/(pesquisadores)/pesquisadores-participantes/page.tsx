import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function PesquisadoresParticipantes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pesquisadores Participantes</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/pesquisadores-participantes/cadastrar">
          Cadastrar pesquisador participante
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Pesquisadores Participantes</PageMain>
    </PageContainer>
  );
}
