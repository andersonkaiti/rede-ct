import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table'
import type { IETP } from 'types/etp'

interface IGTMembersProps {
  gtMembers: IETP['gtMembers']
}

export function GTMembers({ gtMembers: members }: IGTMembersProps) {
  if (!members || members.length === 0) {
    return null
  }

  return (
    <>
      <h3 className="mb-2 font-semibold text-muted-foreground text-sm">
        Grupo de Trabalho
      </h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Instituição</TableHead>
              <TableHead>Registro</TableHead>
              <TableHead>Notas</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((gt, idx) => (
              <TableRow key={gt.name + idx}>
                <TableCell>{gt.name}</TableCell>
                <TableCell>{gt.role}</TableCell>
                <TableCell>{gt.institution}</TableCell>
                <TableCell>{gt.registration}</TableCell>
                <TableCell>{gt.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
