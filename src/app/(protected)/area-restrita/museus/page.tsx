import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../_components/create-button";

export default function Museus() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Museus</PageTitle>
        <CreateButton href="/area-restrita/museus/cadastrar">
          Cadastrar Museu
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>Museus</PageMain>
    </PageContainer>
  );
}
