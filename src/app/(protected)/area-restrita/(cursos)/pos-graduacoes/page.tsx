import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function PosGraduacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Pós-Graduações</PageTitle>
        <CreateButton href="/area-restrita/pos-graduacoes/cadastrar">
          Cadastrar Pós-Graduação
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Pós-Graduações</PageMain>
    </PageContainer>
  );
}
