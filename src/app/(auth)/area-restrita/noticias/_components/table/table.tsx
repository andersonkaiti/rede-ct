"use client";

import { useUserNews } from "@/app/(auth)/area-restrita/noticias/_hooks/use-user-news.hook";
import * as Table from "@components/ui/table";
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
