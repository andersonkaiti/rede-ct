import { ColumnDef } from "@tanstack/react-table";
import { ITeamMember } from "types/team";
import { IUser } from "types/user";

import { ActionsRow } from "@/app/(protected)/area-restrita/_components/actions-row";

import { UpdateMemberForm } from "../update-member/update-member-form";

export const sdhcTeamTableColumns: ColumnDef<ITeamMember>[] = [
  {
    id: "name",
    header: "Nome",
    cell: ({
      row: {
        original: { user },
      },
    }) => {
      const { first_name, last_name } = user as IUser;

      return `${first_name} ${last_name || ""}`;
    },
  },
  {
    id: "role",
    header: "Cargo",
    cell: ({
      row: {
        original: { role },
      },
    }) => role,
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({
      row: { original },
      table: {
        options: { meta },
      },
    }) => (
      <ActionsRow
        data={original}
        handleRemove={() => meta?.handleRemove?.(original)}
        form={UpdateMemberForm}
      />
    ),
  },
];
