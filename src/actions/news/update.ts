"use server";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { newsSchema } from "@validators/news";
import { INews } from "types/news";
import { State } from "types/news-form-state";

export async function updateNews(id: string, _: unknown, formData: FormData) {
  console.log(formData.get("title"));
  console.log(formData.get("content"));

  const { success, data, error } = newsSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
    } as State;
  }

  const { title, content } = data;

  console.log(title, content, id);

  await api.put<INews>(`${BASE_URL}/news/${id}`, {
    title,
    content,
    id,
  });

  return {
    success: true,
  } as State;
}
