import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function CongressosCientificosInternacionais() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Congressos Científicos Internacionais</PageTitle>
        <CreateButton href="/area-restrita/congressos-cientificos-internacionais/cadastrar">
          Cadastrar Congresso
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Congressos Científicos Internacionais</PageMain>
    </PageContainer>
  );
}
