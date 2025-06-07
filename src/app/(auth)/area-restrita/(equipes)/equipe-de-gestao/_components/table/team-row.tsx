import Link from "next/link";
import { Button } from "@components/ui/button";
import * as Table from "@components/ui/table";
import { Pencil } from "lucide-react";
import { ITeam } from "types/team";
import { DeleteDialog } from "./delete-dialog";

export interface ITeamRowProps {
  team: ITeam;
  handleRemoveTeam: (teamId: ITeam["id"]) => Promise<void>;
}

export function TeamRow({ team, handleRemoveTeam }: ITeamRowProps) {
  return (
    <Table.Row key={team.id}>
      <Table.Cell>{team.name}</Table.Cell>
      <Table.Cell>
        <Link href={`/area-restrita/equipe-de-gestao/editar/${team.id}`}>
          <Button variant="ghost" className="cursor-pointer">
            <Pencil />
            Editar
          </Button>
        </Link>
        <DeleteDialog onDelete={() => handleRemoveTeam(team.id)} />
      </Table.Cell>
    </Table.Row>
  );
}
