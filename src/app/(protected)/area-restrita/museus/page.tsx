import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Museus() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Museus</Container.PageTitle>
        <CreateButton href="/area-restrita/museus/cadastrar">
          Cadastrar Museu
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Museus</Container.PageMain>
    </Container.PageContainer>
  );
}
