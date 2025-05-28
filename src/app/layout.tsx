import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider } from "@providers/query-client";
import { Toaster } from "sonner";

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
      <QueryClientProvider>
        <html lang="pt-BR">
          <body className={`${poppins.variable}`}>
            {children}
            <Toaster className="fixed right-0 bottom-0 z-50" />
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
