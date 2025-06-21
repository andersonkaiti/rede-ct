"use client";

import { useAuth } from "@clerk/nextjs";
import { getUserNews } from "@services/news";
import { deleteNewsById } from "@services/news/delete-news-by-id";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { INews } from "types/news";

export function useUserNews() {
  const { userId } = useAuth();
  const queryClient = useQueryClient();

  const QUERY_KEY = ["user-news", userId];

  const isUserIdAvailable = !!userId;

  const { isLoading, ...rest } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: getUserNews,
    enabled: isUserIdAvailable,
    staleTime: 0,
  });

  const isReallyLoading = isLoading || !isUserIdAvailable;

  async function handleRemoveNews({ id, author_id, image_url }: INews) {
    if (userId !== author_id) {
      throw new Error("Você não tem permissão para deletar esta notícia!");
    }

    await deleteNewsById(id, image_url);

    queryClient.setQueryData(
      QUERY_KEY,
      (old: INews[]) => old.filter((news) => news.id !== id) || [],
    );

    toast.success("Notícia removida com sucesso!");
  }

  return {
    isLoading: isReallyLoading,
    handleRemoveNews,
    ...rest,
  };
}
