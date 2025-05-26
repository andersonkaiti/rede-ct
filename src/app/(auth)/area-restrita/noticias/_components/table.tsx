"use client";

import Link from "next/link";
import { Button } from "@components/ui/button";
import * as Table from "@components/ui/table";
import { Pencil } from "lucide-react";
import { DeleteDialog } from "./delete-dialog";

export function NoticiasTable() {
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
        <Table.Row>
          <Table.Cell>Título da notícia</Table.Cell>
          <Table.Cell>25/05/2025</Table.Cell>
          <Table.Cell className="space-x-2">
            <Link href="/area-restrita/noticias/editar/1">
              <Button variant="ghost" className="cursor-pointer text-xs">
                Editar
                <Pencil />
              </Button>
            </Link>
            <DeleteDialog />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
