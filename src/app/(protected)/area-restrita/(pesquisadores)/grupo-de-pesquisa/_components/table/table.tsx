"use client";

import * as Table from "@components/ui/table";

export function GrupoDePesquisaTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head>Nome</Table.Head>
          <Table.Head>Ações</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Grupo de Pesquisa 1</Table.Cell>
          <Table.Cell>Ações</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
