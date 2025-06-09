import { registerTeamSchema } from "./schema";

interface IErrors {
  errors: {
    [key in keyof z.infer<typeof registerTeamSchema>]?: string[];
  };
}

interface ISuccess {
  success: boolean;
}

export type State = IErrors | ISuccess | null;
