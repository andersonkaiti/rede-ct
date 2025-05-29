"use client";

import * as Table from "@components/ui/table";
import { useUserNews } from "@hooks/user-news.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { NewsRow } from "./news-row";

export function NoticiasTable() {
  const { data: news, handleRemoveNews, isLoading } = useUserNews();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Título</Table.Head>
          <Table.Head>Data</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {news?.map((news) => (
          <NewsRow
            key={news.id}
            news={news}
            handleRemoveNews={handleRemoveNews}
          />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
