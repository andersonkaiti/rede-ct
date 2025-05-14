import { SkeletonImage } from "./skeleton-image";
import { SkeletonRoot } from "./skeleton";
import { SkeletonTitle } from "./skeleton-title";
import { SkeletonText } from "./skeleton-text";
import { SkeletonButton } from "./skeleton-button";

export interface ISkeletonProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  children: React.ReactNode;
}

export const Skeleton = {
  Root: SkeletonRoot,
  Image: SkeletonImage,
  Text: SkeletonText,
  Title: SkeletonTitle,
  Button: SkeletonButton,
};
