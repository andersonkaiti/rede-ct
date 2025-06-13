import { BASE_URL } from "@config/index";
import { QueryFunctionContext } from "@tanstack/react-query";
import { INews } from "types/news";

import { api } from "@/adapters/index";

export async function getUserNews({
  queryKey: [, userId],
}: QueryFunctionContext) {
  return await api.get<INews[]>(`${BASE_URL}/news/author/${userId}`);
}
