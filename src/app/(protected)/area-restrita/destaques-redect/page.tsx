import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function DestaquesRedeCT() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Destaques da RedeCT</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/destaques-redect/cadastrar">
          Cadastrar destaque
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Destaques da RedeCT</PageMain>
    </PageContainer>
  );
}
