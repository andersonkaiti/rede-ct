import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Legislacoes() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageHeaderContent>
          <Container.PageTitle>Legislações</Container.PageTitle>
        </Container.PageHeaderContent>
        <CreateButton href="/area-restrita/legislacoes/cadastrar">
          Cadastrar legislação
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Legislações</Container.PageMain>
    </Container.PageContainer>
  );
}
