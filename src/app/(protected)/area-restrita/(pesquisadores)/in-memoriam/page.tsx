import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function InMemoriam() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>In Memoriam</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/in-memoriam/create">
          Cadastrar pesquisador
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>In Memoriam</Container.PageMain>
    </Container.PageContainer>
  );
}
