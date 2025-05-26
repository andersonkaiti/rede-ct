import { z } from "zod";

export const newsSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  text: z.string().min(1, "Texto é obrigatório"),
});
