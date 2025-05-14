import { IUserCardProps } from ".";

export function UserCardWrapper({ children }: IUserCardProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">{children}</div>
  );
}
