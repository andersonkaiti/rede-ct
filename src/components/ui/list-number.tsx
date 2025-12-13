export function ListNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-base text-primary">
      {children}
    </span>
  )
}
