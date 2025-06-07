"use server";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import {
  registerTeamMembersSchema,
  registerTeamNameSchema,
} from "@validators/team";
import "server-only";
import { ITeamMember } from "types/team";
import { State } from "types/team-form-state";

export interface IUpdateTeamProps {
  team: ITeamMember[];
  id: string;
}

export async function updateTeam(
  { team, id }: IUpdateTeamProps,
  _: unknown,
  formData: FormData,
) {
  const {
    success: teamNameSuccess,
    data: teamName,
    error: teamNameError,
  } = registerTeamNameSchema.safeParse(formData.get("name"));

  const { success: membersSuccess, error: membersError } =
    registerTeamMembersSchema.safeParse(team);

  if (!teamNameSuccess || !membersSuccess) {
    return {
      errors: {
        name: teamNameError?.flatten().fieldErrors,
        members: membersError?.flatten().fieldErrors,
      },
    } as State;
  }

  console.log(team);

  await api.put(`${BASE_URL}/team/${id}`, {
    name: teamName,
    members: team,
  });

  return {
    success: true,
  } as State;
}
