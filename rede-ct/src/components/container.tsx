export function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex-1 space-y-4 rounded-md p-8 text-justify shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      {children}
    </section>
  );
}
