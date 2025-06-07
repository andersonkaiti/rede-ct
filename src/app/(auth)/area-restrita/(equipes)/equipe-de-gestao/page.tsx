import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";
import { CreateTeamButton } from "./_components/create-team-button";
import EquipeDeGestaoTable from "./_components/table/table";

export default function EquipeDeGestao() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Equipe de Gestão</Container.PageTitle>
        <CreateTeamButton />
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>
        <EquipeDeGestaoTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
