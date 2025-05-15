import { cn } from "@utils/cn";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

export function Input({ children, className, ...props }: IInputProps) {
  return (
    <div
      className={cn(
        "flex h-fit w-fit items-center rounded-lg border border-gray-200 bg-white text-[14px] text-gray-600 transition-all duration-150 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-white",
        className,
      )}
    >
      <input
        {...props}
        className="w-full rounded-l-lg bg-transparent px-3 py-1 text-gray-900 placeholder-gray-400 focus:outline-none"
      />
      {children}
    </div>
  );
}
