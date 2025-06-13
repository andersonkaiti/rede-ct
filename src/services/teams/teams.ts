import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";

export async function getTeams<T>(type: string) {
  return await api.get<T>(`${BASE_URL}/team/type/${type}`);
}
