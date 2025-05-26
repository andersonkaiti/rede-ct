"use server";

import { State } from "@/@types/news-form-state";
import { newsSchema } from "@validators/news";

export async function registerNews(_: unknown, formData: FormData) {
  const data = newsSchema.safeParse(Object.fromEntries(formData));

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    } as State;
  }

  return {
    success: "Notícia cadastrada com sucesso!",
  } as State;
}
