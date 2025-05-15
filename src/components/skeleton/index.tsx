import { SkeletonRoot } from "./skeleton";
import { SkeletonButton } from "./skeleton-button";
import { SkeletonImage } from "./skeleton-image";
import { SkeletonText } from "./skeleton-text";
import { SkeletonTitle } from "./skeleton-title";

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
