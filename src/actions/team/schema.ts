import { z } from "zod";

export const registerTeamSchema = z.object({
  user_id: z.string().min(1, { message: "Membro é obrigatório" }),
  role: z.string().min(1, { message: "Cargo é obrigatório" }),
  description: z.string().min(1, { message: "Descrição é obrigatória" }),
});
