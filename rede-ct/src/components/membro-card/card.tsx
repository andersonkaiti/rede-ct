import { IMembroCardProps } from ".";

export function MembroCardRoot({ children }: IMembroCardProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      {children}
    </div>
  );
}
