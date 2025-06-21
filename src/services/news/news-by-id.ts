"use server";

import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { INews } from "types/news";

export async function getNewsById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await api.get<INews>(`${BASE_URL}/news/${id}`);
}
