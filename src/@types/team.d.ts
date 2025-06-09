import { IUser } from "./user";

export interface ITeamMember {
  id?: string;
  role: string;
  created_at?: string;
  updated_at?: string;
  user_id: string;
  description?: string;
  user?: IUser;
}

export interface ITeam {
  id: string;
  name: string;
  type: string;
  created_at: string;
  updated_at: string;
  team_members: ITeamMember[];
}
