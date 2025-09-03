import { AnimatedThemeToggler } from '@components/magicui/animated-theme-toggler'
import { Button } from '@components/ui/button'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@components/ui/sidebar'
import { SidebarContainer } from './_components/sidebar/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <SidebarContainer />

      <SidebarInset>
        <div className="flex h-full w-full flex-col">
          <div className="flex justify-between">
            <SidebarTrigger className="mt-4 ml-4 cursor-pointer" />

            <Button asChild className="m-4 size-8" variant="ghost">
              <AnimatedThemeToggler />
            </Button>
          </div>

          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
