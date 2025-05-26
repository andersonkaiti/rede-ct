import { Footer } from "@components/layout/footer/footer";
import { NavigationBar } from "@components/layout/navigation-bar/navigation-bar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
