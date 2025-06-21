"use client";

import { DataTable } from "@components/ui/data-table";
import { INews } from "types/news";

import { useUserNews } from "../../_hooks/use-user-news.hook";
import { LoadingSkeleton } from "./loading-skeleton";
import { newTableColumns } from "./news-table-columns";

export function Table() {
  const { data: news, handleRemoveNews, isLoading } = useUserNews();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <DataTable<INews, unknown>
      columns={newTableColumns}
      data={news}
      handleRemove={handleRemoveNews}
    />
  );
}
