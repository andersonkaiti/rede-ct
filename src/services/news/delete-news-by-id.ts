import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { INews } from "types/news";

export async function deleteNewsById(id: string) {
  await api.delete<INews>(`${BASE_URL}/news/${id}`);
}
