import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { QueryFunctionContext } from "@tanstack/react-query";
import { ITeam } from "types/team";

export async function getTeam({ queryKey: [, id] }: QueryFunctionContext) {
  return await api.get<ITeam>(`${BASE_URL}/team/id/${id}`);
}
