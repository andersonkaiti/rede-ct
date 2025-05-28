"use server";

import { api } from "@adapters/index";
import { currentUser } from "@clerk/nextjs/server";
import { BASE_URL } from "@config/index";
import { newsSchema } from "@validators/news";
import { State } from "types/news-form-state";

export async function registerNews(_: unknown, formData: FormData) {
  const { success, data, error } = newsSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    } as State;
  }

  const { title, content } = data;

  const user = await currentUser();

  await api.post(`${BASE_URL}/news`, {
    title,
    content,
    author_id: user?.id,
  });

  return {
    success: true,
  } as State;
}
