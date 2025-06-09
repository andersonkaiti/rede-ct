"use server";

import { BASE_URL } from "@config/index";
import { INews } from "types/news";

import { api } from "@/adapters";

export async function getNewsById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await api.get<INews>(`${BASE_URL}/news/${id}`);
}
