import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function RegimentosEAtas() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Regimentos e Atas</PageTitle>
        <CreateButton href="/area-restrita/regimentos-e-atas/cadastrar">
          Cadastrar Regimento
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Regimentos e Atas</PageMain>
    </PageContainer>
  );
}
