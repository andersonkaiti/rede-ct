import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Portfolio() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Portfólio</Container.PageTitle>
        <CreateButton href="/area-restrita/portfolio/cadastrar">
          Cadastrar Portfólio
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Portfólio</Container.PageMain>
    </Container.PageContainer>
  );
}
