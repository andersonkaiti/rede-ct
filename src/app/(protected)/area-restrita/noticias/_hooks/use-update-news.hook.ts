"use client";

import { updateNews } from "@actions/news/update";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

export interface IUseUpdateNewsProps {
  id: string;
  image_url?: string;
}

export function useUpdateNews({ id, image_url }: IUseUpdateNewsProps) {
  const [state, formAction, isLoading] = useActionState(
    updateNews.bind(null, id, image_url),
    null,
  );

  const [preview, setPreview] = useState<string | null>(null);

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);
    }
  }

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
    preview,
    handleImage,
  };
}
