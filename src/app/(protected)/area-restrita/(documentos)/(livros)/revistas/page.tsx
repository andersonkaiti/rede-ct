import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../../_components/create-button";

export default function Revistas() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Revistas</PageTitle>
        <CreateButton href="/area-restrita/revistas/cadastrar">
          Cadastrar Revista
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Revistas</PageMain>
    </PageContainer>
  );
}
