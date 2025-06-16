import { Input } from "@components/ui/input";
import {
  PageContainer,
  PageHeader,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { CreateNewsButton } from "./_components/create-news-button";
import { NoticiasTable } from "./_components/table/table";

export default function Noticias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Notícias</PageTitle>
        <CreateNewsButton />
      </PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <PageMain>
        <NoticiasTable />
      </PageMain>
    </PageContainer>
  );
}
