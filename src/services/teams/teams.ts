import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";

export async function getTeams<T>(type: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await api.get<T>(`${BASE_URL}/team/type/${type}`);
}
