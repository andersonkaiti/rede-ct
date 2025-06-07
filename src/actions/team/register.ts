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

export async function registerTeam(
  team: ITeamMember[],
  _: unknown,
  formData: FormData,
) {
  const {
    success: nameSuccess,
    data: teamName,
    error: nameError,
  } = registerTeamNameSchema.safeParse(formData.get("name"));

  const {
    success: membersSuccess,
    data: members,
    error: membersError,
  } = registerTeamMembersSchema.safeParse(team);

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
    members: members.map(({ user_id, ...rest }) => ({
      user_id,
      ...rest,
    })),
    type: "equipe-de-gestao",
  });

  return {
    success: true,
  } as State;
}
