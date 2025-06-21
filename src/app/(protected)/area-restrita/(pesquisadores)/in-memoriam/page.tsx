import {
  PageActionsContainer,
  PageContainer,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
} from "@components/ui/page-container";

import { FilterInput } from "../../_components/filter-input";
import { CreateInMemoriamButton } from "./create-in-memoriam/create-in-memoriam-button";

export default function InMemoriam() {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>In Memoriam</PageTitle>
          <PageDescription>Gerencie os In Memoriam</PageDescription>
        </PageHeaderContent>
      </PageHeader>

      <PageHeader>
        <PageActionsContainer>
          <FilterInput />
        </PageActionsContainer>
        <CreateInMemoriamButton />
      </PageHeader>

      <PageMain>In Memoriam</PageMain>
    </PageContainer>
  );
}
