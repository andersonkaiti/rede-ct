import { SkeletonRoot } from "./skeleton";
import { SkeletonButton } from "./skeleton-button";
import { SkeletonCircle } from "./skeleton-circle";
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
  Circle: SkeletonCircle,
  Text: SkeletonText,
  Title: SkeletonTitle,
  Button: SkeletonButton,
};
