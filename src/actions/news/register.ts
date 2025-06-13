"use server";

import { api } from "@adapters/index";
import { currentUser } from "@clerk/nextjs/server";
import { BASE_URL } from "@config/index";

import { newsSchema } from "./schema";
import { State } from "./state";

export async function registerNews(_: unknown, formData: FormData) {
  const { success, error } = newsSchema.safeParse(Object.fromEntries(formData));

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    } as State;
  }

  const user = await currentUser();

  const news = new FormData();

  news.append("title", formData.get("title") as string);
  news.append("content", formData.get("content") as string);
  news.append("author_id", user?.id || "");
  news.append("image", formData.get("image") as File);

  await api.post(`${BASE_URL}/news`, news, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return {
    success: true,
  } as State;
}
