import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function CongressosRegionais() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Congressos Regionais</Container.PageTitle>
        <CreateButton href="/area-restrita/congressos-regionais/cadastrar">
          Cadastrar Congresso
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>Congressos Regionais</Container.PageMain>
    </Container.PageContainer>
  );
}
