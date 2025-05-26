"use client";

import { redirect, useParams } from "next/navigation";
import { useActionState, useEffect } from "react";
import { updateNews } from "@actions/news/update";
import { toast } from "sonner";

export function useUpdateNews() {
  const { id } = useParams();

  console.log(id);

  const [state, formAction, isLoading] = useActionState(updateNews, null);

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
