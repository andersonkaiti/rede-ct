import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function CentroDeReferenciaUnesp() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Centro de Referência UNEP</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/centro-de-referencia-unesp/cadastrar">
          Cadastrar edital
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Centro de Referência UNEP</PageMain>
    </PageContainer>
  );
}
