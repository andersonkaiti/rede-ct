"use client";

import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { updateNews } from "@actions/news/update";
import { toast } from "sonner";

export function useUpdateNews(id: string) {
  const [state, formAction, isLoading] = useActionState(
    updateNews.bind(null, id),
    null,
  );

  useEffect(() => {
    if (state && "success" in state) {
      toast.success(state.success, {
        description: "Notícia atualizada com sucesso!",
      });

      redirect("/area-restrita/noticias");
    }
  }, [state]);

  return {
    state,
    formAction,
    isLoading,
  };
}
