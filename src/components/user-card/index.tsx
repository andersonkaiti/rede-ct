import { UserCardRoot } from "./card";
import { CardButtonLattes } from "./card-button-lattes";
import { UserCardImage } from "./card-image";
import { UserCardWrapper } from "./card-wrapper";

export interface IUserCardProps {
  children: React.ReactNode;
}

export const UserCard = {
  Wrapper: UserCardWrapper,
  Root: UserCardRoot,
  Image: UserCardImage,
  Button: CardButtonLattes,
};
