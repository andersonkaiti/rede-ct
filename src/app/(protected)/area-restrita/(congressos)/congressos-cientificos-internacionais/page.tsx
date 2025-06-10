import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function CongressosCientificosInternacionais() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>
          Congressos Científicos Internacionais
        </Container.PageTitle>
        <CreateButton href="/area-restrita/congressos-cientificos-internacionais/cadastrar">
          Cadastrar Congresso
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>
        Congressos Científicos Internacionais
      </Container.PageMain>
    </Container.PageContainer>
  );
}
