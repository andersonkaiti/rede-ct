"use client";

import { startTransition, useOptimistic } from "react";
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

  const {
    isLoading,
    data: news,
    ...rest
  } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: getUserNews,
    enabled: isUserIdAvailable,
    staleTime: 0,
  });

  const isReallyLoading = isLoading || !isUserIdAvailable;

  const [optimisticNews, updateOptimisticNews] = useOptimistic(
    news || [],
    (prevNews: INews[], newsId: INews["id"]) =>
      prevNews?.filter((news) => news.id !== newsId),
  );

  async function handleRemoveNews({
    id,
    author_id: newsAuthorId,
    image_url,
  }: Pick<INews, "id" | "author_id" | "image_url">) {
    if (userId !== newsAuthorId) {
      throw new Error("Você não tem permissão para deletar esta notícia!");
    }

    startTransition(() => {
      updateOptimisticNews(id);
    });

    await deleteNewsById(id, image_url);

    queryClient.invalidateQueries({
      queryKey: QUERY_KEY,
    });

    toast.success("Notícia removida com sucesso!");
  }

  return {
    isLoading: isReallyLoading,
    data: optimisticNews,
    handleRemoveNews,
    ...rest,
  };
}
