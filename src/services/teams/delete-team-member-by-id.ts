import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";

export async function deleteTeamMemberById(id: string) {
  await api.delete(`${BASE_URL}/team/member/${id}`);
}
