"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui/table";

import { useUserNews } from "../../_hooks/use-user-news.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { NewsRow } from "./news-row";

export function NoticiasTable() {
  const { data: news, handleRemoveNews, isLoading } = useUserNews();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Título</TableHead>
          <TableHead>Data</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {news?.map((news) => (
          <NewsRow
            key={news.id}
            news={news}
            handleRemoveNews={handleRemoveNews}
          />
        ))}
      </TableBody>
    </Table>
  );
}
