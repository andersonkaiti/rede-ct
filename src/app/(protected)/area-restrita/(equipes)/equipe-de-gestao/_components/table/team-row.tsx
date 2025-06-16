import { Button } from "@components/ui/button";
import { TableCell, TableRow } from "@components/ui/table";
import { EditIcon } from "lucide-react";
import Link from "next/link";
import { ITeam } from "types/team";

import { DeleteDialog } from "./delete-dialog";

export interface ITeamRowProps {
  team: ITeam;
  handleRemoveTeam: (teamId: ITeam["id"]) => Promise<void>;
}

export function TeamRow({ team, handleRemoveTeam }: ITeamRowProps) {
  return (
    <TableRow key={team.id}>
      <TableCell>{team.name}</TableCell>
      <TableCell>
        <Link href={`/area-restrita/equipe-de-gestao/editar/${team.id}`}>
          <Button variant="ghost" className="cursor-pointer">
            <EditIcon className="size-4" />
            Editar
          </Button>
        </Link>
        <DeleteDialog onDelete={() => handleRemoveTeam(team.id)} />
      </TableCell>
    </TableRow>
  );
}
