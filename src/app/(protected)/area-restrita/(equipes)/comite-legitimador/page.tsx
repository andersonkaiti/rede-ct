import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateMemberButton } from "./_components/create-member/create-member-button";
import { ComiteLegitimadorTable } from "./_components/table/table";

export default function ComiteLegitimador() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Comitê Legitimador</PageTitle>
        <CreateMemberButton>Adicionar membro</CreateMemberButton>
      </PageHeader>
      <Input placeholder="Pesquisar comitê" className="w-full sm:w-fit" />
      <PageMain>
        <ComiteLegitimadorTable />
      </PageMain>
    </PageContainer>
  );
}
