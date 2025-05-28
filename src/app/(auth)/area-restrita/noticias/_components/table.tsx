"use client";

import Link from "next/link";
import { Button } from "@components/ui/button";
import { Skeleton } from "@components/ui/skeleton";
import * as Table from "@components/ui/table";
import { useUserNews } from "@hooks/user-news.hook";
import { formatDate } from "@utils/format-date";
import { Pencil } from "lucide-react";
import { DeleteDialog } from "./delete-dialog";

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
        {news?.map(({ id, title, created_at, author_id }) => (
          <Table.Row key={id}>
            <Table.Cell>{title}</Table.Cell>
            <Table.Cell>{formatDate(created_at)}</Table.Cell>
            <Table.Cell className="space-x-2">
              <Link href={`/area-restrita/noticias/editar/${id}`}>
                <Button variant="ghost" className="cursor-pointer text-xs">
                  Editar
                  <Pencil />
                </Button>
              </Link>
              <DeleteDialog
                onDelete={() => handleRemoveNews({ id, author_id })}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export function LoadingSkeleton() {
  return (
    <Skeleton className="h-full w-full border shadow-sm [&_div]:border-b [&_div:last-child]:border-0">
      <div className="flex h-13 gap-4 p-4">
        <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
        <Skeleton className="h-full flex-2 rounded-md bg-gray-200" />
        <Skeleton className="h-full flex-3 rounded-md bg-gray-200" />
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex h-17 gap-4 p-4">
          <Skeleton className="h-full flex-1 rounded-md bg-gray-200" />
          <Skeleton className="h-full flex-2 rounded-md bg-gray-200" />
          <Skeleton className="h-full flex-3 rounded-md bg-gray-200" />
        </div>
      ))}
    </Skeleton>
  );
}
