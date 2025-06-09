import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Webinarios() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Webinários</Container.PageTitle>
        <CreateButton href="/area-restrita/webinarios/cadastrar">
          Cadastrar Webinário
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Webinários</Container.PageMain>
    </Container.PageContainer>
  );
}
