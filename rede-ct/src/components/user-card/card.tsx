import { IUserCardProps } from ".";

export function UserCardRoot({ children }: IUserCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      {children}
    </div>
  );
}
