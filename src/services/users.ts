import { api } from "@adapters/index";
import { BASE_URL } from "@config/index";
import type { IUser } from "types/user";

export async function getUsers() {
  return await api.get<IUser[]>(`${BASE_URL}/user`);
}
