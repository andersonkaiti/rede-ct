import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function ETPS() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>ETPs</PageTitle>
        <CreateButton href="/area-restrita/etps/cadastrar">
          Cadastrar ETP
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>ETPs</PageMain>
    </PageContainer>
  );
}
