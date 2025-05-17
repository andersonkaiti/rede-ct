import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

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
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} flex min-h-screen flex-col justify-between`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
