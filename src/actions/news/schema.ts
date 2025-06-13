import { z } from "zod";

const BYTES = 1024;
const MEGABYTES = BYTES * BYTES;
const TOTAL_SIZE = 50 * MEGABYTES;

export const newsSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  content: z.string().min(1, "Texto é obrigatório"),
  image: z.instanceof(File).refine((file) => file.size <= TOTAL_SIZE, {
    message: "A imagem deve ter no máximo 50MB",
  }),
});
