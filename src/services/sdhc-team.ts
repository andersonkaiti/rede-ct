import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { ITeam } from "types/team";

export async function getSdhcTeam() {
  return await api.get<ITeam[]>(`${BASE_URL}/team/type/equipe-sdhc`);
}
