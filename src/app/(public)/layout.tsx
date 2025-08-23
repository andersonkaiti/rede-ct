import { Footer } from './_components/footer/footer'
import { NavigationBar } from './_components/navigation-bar/navigation-bar'

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  )
}
