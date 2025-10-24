import './globals.css'

import { Toaster } from '@components/ui/sonner'
import { QueryClientProvider } from '@providers/query-client'
import { ThemeProvider } from '@providers/theme-provider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Suspense } from 'react'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: 'RedeCT - %s',
    default: 'RedeCT',
  },
  description:
    'Rede Internacional de Pesquisadores sobre Povos Originários e Comunidades Tradicionais',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryClientProvider>
      <html lang="pt-BR" suppressHydrationWarning>
        <body className={`${poppins.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            <NuqsAdapter>
              <Suspense>{children}</Suspense>
            </NuqsAdapter>
            <Toaster position="bottom-center" />
          </ThemeProvider>
        </body>
      </html>
    </QueryClientProvider>
  )
}
