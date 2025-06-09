"use server";

import "server-only";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { revalidatePath } from "next/cache";

import { registerTeamSchema } from "./schema";
import { State } from "./state";

export interface IUpsertTeamMemberProps {
  team: {
    name?: string;
    type?: string;
    id: string;
  };
  user: {
    id?: string;
  };
}

export async function upsertTeamMember(
  { team, user }: IUpsertTeamMemberProps,
  _: unknown,
  formData: FormData,
) {
  const {
    success: memberSuccess,
    data,
    error: memberError,
  } = registerTeamSchema.safeParse(Object.fromEntries(formData));

  if (!memberSuccess) {
    return {
      errors: memberError.flatten().fieldErrors,
    } as State;
  }

  const teamAlreadyExists = !!team.id;

  const body = {
    ...team,
    ...user,
    ...data,
  };

  if (teamAlreadyExists) {
    if (!user.id) {
      await api.post(`${BASE_URL}/team/member/${team.id}`, body);
    }

    if (user.id) {
      await api.put(`${BASE_URL}/team/member/${user.id}`, {
        ...body,
      });
    }
  }

  if (!teamAlreadyExists) {
    await api.post(`${BASE_URL}/team`, body);
  }

  revalidatePath(`/area-restrita/${team.type}`);

  return {
    success: true,
  } as State;
}
