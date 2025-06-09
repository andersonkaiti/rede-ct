import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";

import { CreateButton } from "../../_components/create-button";
import { EquipeSDHCTable } from "./_components/table/table";

export default function EquipeSDHC() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Equipe SDHC</Container.PageTitle>
        <CreateButton href="/area-restrita/equipe-sdhc/cadastrar">
          Criar Equipe SDHC
        </CreateButton>
      </Container.PageHeader>
      <Input placeholder="Pesquisar equipe" className="w-full sm:w-fit" />
      <Container.PageMain>
        <EquipeSDHCTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
