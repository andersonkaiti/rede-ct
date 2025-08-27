import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@components/ui/menubar'
import { Separator } from '@components/ui/separator'
import { ChevronsUpDown, LogOut } from 'lucide-react'

export async function UserProfile() {
  const user = await currentUser()

  const firstInitial = user?.firstName?.charAt(0) ?? ''
  const lastInitial = user?.lastName?.charAt(0) ?? ''
  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(' ')

  return (
    <Menubar className="flex w-full border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.imageUrl || ''} />
              <AvatarFallback>
                {firstInitial}
                {lastInitial}
              </AvatarFallback>
            </Avatar>
            {fullName}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent align="end" className="w-fit space-y-2 bg-background">
          <div className="px-2">
            <div className="font-sm text-foreground">E-mail</div>
            {user?.emailAddresses?.[0]?.emailAddress && (
              <div className="break-all text-muted-foreground text-xs">
                {user.emailAddresses[0].emailAddress}
              </div>
            )}
          </div>

          <Separator />

          <MenubarItem className="cursor-pointer">
            <SignOutButton>
              <div className="group flex w-full cursor-pointer items-center gap-2 text-primary">
                <LogOut className="size-3 text-primary" />
                <span className="text-xs">Deslogar</span>
              </div>
            </SignOutButton>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
