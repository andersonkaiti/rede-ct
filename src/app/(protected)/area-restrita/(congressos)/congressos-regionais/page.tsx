import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function CongressosRegionais() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Congressos Regionais</PageTitle>
        <CreateButton href="/area-restrita/congressos-regionais/cadastrar">
          Cadastrar Congresso
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Congressos Regionais</PageMain>
    </PageContainer>
  );
}
