"use server";

import "server-only";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { revalidatePath } from "next/cache";

import { registerTeamMemberSchema } from "./schema";
import { State } from "./state";

interface ICreateTeamMemberProps {
  name?: string;
  type?: string;
  id: string;
}

export async function createTeamMember(
  team: ICreateTeamMemberProps,
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

  const teamAlreadyExists = !!team.id;

  if (teamAlreadyExists) {
    await api.post(`${BASE_URL}/team/member/${team.id}`, {
      ...team,
      member: data,
    });
  }

  if (!teamAlreadyExists) {
    await api.post(`${BASE_URL}/team`, {
      ...team,
      members: [data],
    });
  }

  revalidatePath(`/area-restrita/${team.type}`);

  return {
    success: true,
  } as State;
}
