import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function ETPS() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>ETPs</Container.PageTitle>
        <CreateButton href="/area-restrita/etps/cadastrar">
          Cadastrar ETP
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>ETPs</Container.PageMain>
    </Container.PageContainer>
  );
}
