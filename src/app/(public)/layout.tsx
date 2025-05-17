import { Footer } from "@components/layout/footer/footer";
import { NavigationBar } from "@components/layout/navigation-bar/navigation-bar";
import { Toaster } from "sonner";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
      <div className="fixed right-0 bottom-0 z-50">
        <Toaster />
      </div>
    </>
  );
}
