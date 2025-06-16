import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function Webinarios() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Webinários</PageTitle>
        <CreateButton href="/area-restrita/webinarios/cadastrar">
          Cadastrar Webinário
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Webinários</PageMain>
    </PageContainer>
  );
}
