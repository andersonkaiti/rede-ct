import { IUser } from "./user";

export interface ITeamMember {
  role: string;
  user_id: string;
  id?: string;
  created_at?: string;
  updated_at?: string;
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
