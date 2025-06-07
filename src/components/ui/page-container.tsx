function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-12.5">
      {children}
    </div>
  );
}

function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex w-full items-center justify-between">
      {children}
    </header>
  );
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}

function PageMain({ children }: { children: React.ReactNode }) {
  return <main className="w-full">{children}</main>;
}

function PageFooter({ children }: { children: React.ReactNode }) {
  return <footer className="w-full">{children}</footer>;
}

export { PageContainer, PageFooter, PageHeader, PageMain, PageTitle };
