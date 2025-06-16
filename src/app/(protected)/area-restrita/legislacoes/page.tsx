import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Legislacoes() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Legislações</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/legislacoes/cadastrar">
          Cadastrar legislação
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Legislações</PageMain>
    </PageContainer>
  );
}
