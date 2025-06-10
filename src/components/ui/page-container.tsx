function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 p-4 py-10 md:gap-8">
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

function PageHeaderContent({ children }: { children: React.ReactNode }) {
  return <div className="w-full space-y-1">{children}</div>;
}

function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}

function PageDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground text-sm">{children}</p>;
}

function PageMain({ children }: { children: React.ReactNode }) {
  return <main className="w-full">{children}</main>;
}

function PageForm({
  children,
  ...props
}: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="flex flex-col gap-4" {...props}>
      {children}
    </form>
  );
}

function PageFormContent({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-4">{children}</div>;
}

function PageFormContentField({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

function PageFooter({ children }: { children: React.ReactNode }) {
  return <footer className="w-full">{children}</footer>;
}

export {
  PageContainer,
  PageDescription,
  PageFooter,
  PageForm,
  PageFormContent,
  PageFormContentField,
  PageHeader,
  PageHeaderContent,
  PageMain,
  PageTitle,
};
