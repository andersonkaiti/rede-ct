import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function RegimentosEAtas() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Regimentos e Atas</Container.PageTitle>
        <CreateButton href="/area-restrita/regimentos-e-atas/cadastrar">
          Cadastrar Regimento
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Regimentos e Atas</Container.PageMain>
    </Container.PageContainer>
  );
}
