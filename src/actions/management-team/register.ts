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

export async function registerManagementTeam(
  team: ITeamMember[],
  _: unknown,
  formData: FormData,
) {
  const {
    success: nameSuccess,
    data: teamName,
    error: nameError,
  } = registerManagementTeamNameSchema.safeParse(formData.get("name"));

  const {
    success: membersSuccess,
    data: members,
    error: membersError,
  } = registerManagementTeamMembersSchema.safeParse(team);

  if (!nameSuccess || !membersSuccess) {
    return {
      errors: {
        name: nameError?.flatten().formErrors,
        members: membersError?.flatten().formErrors,
      },
    } as State;
  }

  await api.post(`${BASE_URL}/team`, {
    name: teamName,
    type: "equipe-de-gestao",
    members: members.map(({ user_id, ...rest }) => ({
      user_id,
      ...rest,
    })),
  });

  return {
    success: true,
  } as State;
}
