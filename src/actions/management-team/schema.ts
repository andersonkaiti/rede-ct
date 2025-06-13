import { z } from "zod";

export const registerManagementTeamNameSchema = z.string().min(1, {
  message: "Nome é obrigatório",
});
export const registerManagementTeamMembersSchema = z
  .array(
    z.object({
      user_id: z.string(),
      role: z.string().min(1, {
        message: "Cargo é obrigatório",
      }),
    }),
  )
  .min(1, {
    message: "Membros são obrigatórios",
  });
