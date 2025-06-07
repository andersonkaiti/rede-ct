import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";

export async function deleteTeamById(id: string) {
  return await api.delete(`${BASE_URL}/team/${id}`);
}
