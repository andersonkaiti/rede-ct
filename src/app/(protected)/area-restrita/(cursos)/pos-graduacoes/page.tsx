import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function PosGraduacoes() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Pós-Graduações</Container.PageTitle>
        <CreateButton href="/area-restrita/pos-graduacoes/cadastrar">
          Cadastrar Pós-Graduação
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Pós-Graduações</Container.PageMain>
    </Container.PageContainer>
  );
}
