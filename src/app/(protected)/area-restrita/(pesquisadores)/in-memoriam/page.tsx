import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";

export default function InMemoriam() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>In Memoriam</PageTitle>
        </PageHeaderContent>
        <CreateButton href="/area-restrita/in-memoriam/create">
          Cadastrar pesquisador
        </CreateButton>
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>In Memoriam</PageMain>
    </PageContainer>
  );
}
