import { MembroCardRoot } from "./card";
import { CardButtonLattes } from "./card-button-lattes";
import { MembroCardImage } from "./card-image";

export interface IMembroCardProps {
  children: React.ReactNode;
}

export const MembroCard = {
  Root: MembroCardRoot,
  Image: MembroCardImage,
  Button: CardButtonLattes,
};
