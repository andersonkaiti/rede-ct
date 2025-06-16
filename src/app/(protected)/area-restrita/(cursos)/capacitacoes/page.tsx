import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Capacitacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Capacitações</PageTitle>
        <CreateButton href="/area-restrita/capacitacoes/cadastrar">
          Cadastrar Capacitação
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Capacitações</PageMain>
    </PageContainer>
  );
}
