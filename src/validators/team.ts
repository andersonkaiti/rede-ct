import { z } from "zod";

export const registerTeamNameSchema = z.string().min(1, {
  message: "Nome é obrigatório",
});

export const registerTeamMembersSchema = z
  .array(
    z.object({
      user_id: z.string(),
      name: z.string(),
      role: z.string().min(1, {
        message: "Cargo é obrigatório",
      }),
    }),
  )
  .min(1, {
    message: "Membros são obrigatórios",
  });
