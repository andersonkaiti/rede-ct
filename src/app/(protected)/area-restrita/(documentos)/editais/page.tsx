import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Editais() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Editais</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/editais/cadastrar">
          Cadastrar edital
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Editais</PageMain>
    </PageContainer>
  );
}
