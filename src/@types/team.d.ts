export interface ITeamMember {
  id?: string;
  name: string;
  role: string;
  created_at?: string;
  updated_at?: string;
  user_id: string;
}

export interface ITeam {
  id: string;
  name: string;
  type: string;
  created_at: string;
  updated_at: string;
  team_members: ITeamMember[];
}
