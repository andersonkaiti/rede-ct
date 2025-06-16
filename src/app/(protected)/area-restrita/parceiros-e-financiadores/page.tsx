import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function ParceirosEFinanciadores() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Parceiros e Financiadores</PageTitle>
        <CreateButton href="/area-restrita/parceiros-e-financiadores/cadastrar">
          Cadastrar Parceiro
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Parceiros e Financiadores</PageMain>
    </PageContainer>
  );
}
