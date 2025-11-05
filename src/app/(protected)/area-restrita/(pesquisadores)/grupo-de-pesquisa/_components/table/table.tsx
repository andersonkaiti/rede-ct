'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table'

export function GrupoDePesquisaTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Grupo de Pesquisa 1</TableCell>
          <TableCell>Ações</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
