import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function PesquisadoresParticipantes() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Pesquisadores Participantes</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/pesquisadores-participantes/cadastrar">
          Cadastrar pesquisador participante
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Pesquisadores Participantes</Container.PageMain>
    </Container.PageContainer>
  );
}
