import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import { IComiteLegitimador } from "types/legitimating-committee";

export async function getLegitimatingCommittee() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return await api.get<IComiteLegitimador[]>(
    `${BASE_URL}/team/type/comite-legitimador`,
  );
}
