"use server";

import "server-only";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { revalidatePath } from "next/cache";

import { registerTeamMemberSchema } from "./schema";
import { State } from "./state";

export interface IUpdateTeamMemberProps {
  team: {
    type: string;
  };
  user: {
    id?: string;
  };
}

export async function updateTeamMember(
  { team, user }: IUpdateTeamMemberProps,
  _: unknown,
  formData: FormData,
) {
  const {
    success: memberSuccess,
    data,
    error: memberError,
  } = registerTeamMemberSchema.safeParse(Object.fromEntries(formData));

  if (!memberSuccess) {
    return {
      errors: memberError.flatten().fieldErrors,
    } as State;
  }

  await api.put(`${BASE_URL}/team/member/${user.id}`, {
    member: {
      ...data,
      id: user.id,
    },
  });

  revalidatePath(`/area-restrita/${team.type}`);

  return {
    success: true,
  } as State;
}
