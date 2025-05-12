import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@components/layout/navigation-bar/navigation-bar";
import { Footer } from "@components/layout/footer/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RedeCT - Rede Internacional de Pesquisadores",
  description:
    "Rede Internacional de Pesquisadores sobre Povos Originários e Comunidades Tradicionais",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} flex min-h-screen flex-col justify-between`}
      >
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
