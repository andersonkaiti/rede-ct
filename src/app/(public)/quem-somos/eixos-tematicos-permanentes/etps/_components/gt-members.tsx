import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table'

interface IGTMembersProps {
  members: {
    id: string
    registrationNumber: string
    mainEtps: string
    formations: string
    degrees: ('DOCTOR' | 'MASTER' | 'BACHELOR' | 'TECHNICAL' | 'POSTGRADUATE')[]
    occupations: string
    seniority: 'SENIOR' | 'RESEARCHER' | 'JUNIOR' | 'HONOR'
    institutions: string
    biography: string
    createdAt: string
    updatedAt: string
    userId: string
    user: {
      id: string
      name: string
      avatarUrl: string | null
      createdAt: string
      updatedAt: string
      emailAddress: string
      orcid: string | null
      phone: string | null
      lattesUrl: string | null
      role: 'ADMIN' | 'USER'
    }
  }[]
}

export function GTMembers({ members }: IGTMembersProps) {
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
            {members?.map((member, index) => (
              <TableRow key={member.user.name + index}>
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
