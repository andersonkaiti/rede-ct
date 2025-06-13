"use server";

import { State } from "@actions/news/state";
import { api } from "@adapters/index";
import { currentUser } from "@clerk/nextjs/server";
import { BASE_URL } from "@config/index";
import { INews } from "types/news";

import { newsSchema } from "./schema";

export async function updateNews(
  id: string,
  image_url: string | undefined,
  _: unknown,
  formData: FormData,
) {
  const { success, error } = newsSchema.safeParse(Object.fromEntries(formData));

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    } as State;
  }

  const user = await currentUser();

  if (!user) {
    throw new Error("Não autorizado!");
  }

  const news = new FormData();

  news.append("title", formData.get("title") as string);
  news.append("content", formData.get("content") as string);
  news.append("image", formData.get("image") as File);
  news.append("author_id", user?.id || "");

  if (image_url) {
    news.append("image_url", image_url);
  }

  await api.put<INews>(`${BASE_URL}/news/${id}`, news);

  return {
    success: true,
  } as State;
}
