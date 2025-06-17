import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { IComiteLegitimador } from "types/legitimating-committee";

export async function getLegitimatingCommittee() {
  return await api.get<IComiteLegitimador[]>(
    `${BASE_URL}/team/type/comite-legitimador`,
  );
}
