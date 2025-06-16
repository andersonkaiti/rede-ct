import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Pendencias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Pendências</PageTitle>
        <CreateButton href="/area-restrita/pendencias/cadastrar">
          Cadastrar Pendência
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Pendências</PageMain>
    </PageContainer>
  );
}
