import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Editais() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Editais</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/editais/cadastrar">
          Cadastrar edital
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Editais</Container.PageMain>
    </Container.PageContainer>
  );
}
