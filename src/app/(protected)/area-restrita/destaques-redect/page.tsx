import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function DestaquesRedeCT() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Destaques da RedeCT</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/destaques-redect/cadastrar">
          Cadastrar destaque
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Destaques da RedeCT</Container.PageMain>
    </Container.PageContainer>
  );
}
