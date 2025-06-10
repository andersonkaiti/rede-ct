import { registerTeamMemberSchema } from "./schema";

interface IErrors {
  errors: {
    [key in keyof z.infer<typeof registerTeamMemberSchema>]?: string[];
  };
}

interface ISuccess {
  success: boolean;
}

export type State = IErrors | ISuccess | null;
