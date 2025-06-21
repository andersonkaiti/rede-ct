import { Button } from "@components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";
import { Funnel } from "lucide-react";

import { FilterInput } from "../_components/filter-input";
import { CreateNewsButton } from "./_components/create-news-button";
import { Table } from "./_components/table/table";

export default function Noticias() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Notícias</PageTitle>
          <PageDescription>Gerencie as suas notícias</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Funnel />
                Exibir
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-muted-foreground">
                Exibir
              </DropdownMenuLabel>
              <DropdownMenuCheckboxItem>Título</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Data</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </PageActionsContainer>
        <CreateNewsButton />
      </PageHeader>

      <PageMain>
        <Table />
      </PageMain>
    </PageContainer>
  );
}
