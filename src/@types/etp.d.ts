import { IUser } from "./user";

export interface IETP {
  name: string;
  description: string;
  members: IUser[];
  text?: string;
}
