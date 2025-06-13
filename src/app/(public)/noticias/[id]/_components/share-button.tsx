"use client";

import { Button } from "@components/ui/button";
import { Share2 } from "lucide-react";
import { INews } from "types/news";

export interface IShareButtonProps {
  news: INews;
}

export function ShareButton({ news: { title, content } }: IShareButtonProps) {
  function handleShare() {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: content,
        url: window.location.href,
      });
    }
  }

  return (
    <Button
      onClick={handleShare}
      variant="ghost"
      className="hover:text-primary cursor-pointer hover:bg-transparent"
      size="icon"
    >
      <Share2 className="size-4" />
    </Button>
  );
}
