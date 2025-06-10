"use server";

import "server-only";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { ITeamMember } from "types/team";

import {
  registerManagementTeamMembersSchema,
  registerManagementTeamNameSchema,
} from "./schema";
import { State } from "./state";

interface IUpdatedManagementTeam {
  team: ITeamMember[];
  id: string;
}

export async function updateManagementTeam(
  { team, id }: IUpdatedManagementTeam,
  _: unknown,
  formData: FormData,
) {
  const {
    success: teamNameSuccess,
    data: teamName,
    error: teamNameError,
  } = registerManagementTeamNameSchema.safeParse(formData.get("name"));

  const { success: membersSuccess, error: membersError } =
    registerManagementTeamMembersSchema.safeParse(team);

  if (!teamNameSuccess || !membersSuccess) {
    return {
      errors: {
        name: teamNameError?.flatten().fieldErrors,
        members: membersError?.flatten().fieldErrors,
      },
    } as State;
  }

  await api.put(`${BASE_URL}/team/${id}`, {
    name: teamName,
    members: team,
  });

  return {
    success: true,
  } as State;
}
