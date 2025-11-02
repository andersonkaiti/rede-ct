import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table'
import type { etpResearcherSchema } from '@http/etps/get-etps'
import type z from 'zod'

interface IGTMembersProps {
  gtMembers: z.infer<typeof etpResearcherSchema>[]
}

export function GTMembers({ gtMembers }: IGTMembersProps) {
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {gtMembers.map((member, idx) => (
              <TableRow key={member.user.name + idx}>
                <TableCell>{member.user.name || ''}</TableCell>
                <TableCell>{member.occupations || ''}</TableCell>
                <TableCell>{member.institutions || ''}</TableCell>
                <TableCell>{member.registrationNumber || ''}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
