export function ListNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-primary/10 text-primary mt-1 mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-base font-semibold">
      {children}
    </span>
  );
}
