import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Portfolio() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Portfólio</PageTitle>
        <CreateButton href="/area-restrita/portfolio/cadastrar">
          Cadastrar Portfólio
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Portfólio</PageMain>
    </PageContainer>
  );
}
