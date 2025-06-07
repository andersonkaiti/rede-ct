import { Input } from "@components/ui/input";
import * as Container from "@components/ui/page-container";
import { CreateNewsButton } from "./_components/create-news-button";
import { NoticiasTable } from "./_components/table/table";

export default function Noticias() {
  return (
    <Container.PageContainer>
      <Container.PageHeader>
        <Container.PageTitle>Notícias</Container.PageTitle>
        <CreateNewsButton />
      </Container.PageHeader>
      <Input placeholder="Pesquisar" className="w-full sm:w-fit" />
      <Container.PageMain>
        <NoticiasTable />
      </Container.PageMain>
    </Container.PageContainer>
  );
}
