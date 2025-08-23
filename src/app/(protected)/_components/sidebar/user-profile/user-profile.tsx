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
import { ChevronsUpDown, LogOut } from 'lucide-react'

export async function UserProfile() {
  const user = await currentUser()

  return (
    <Menubar className="flex w-full border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user?.imageUrl || ''} />
              <AvatarFallback>
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            {user?.firstName} {user?.lastName}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent align="end">
          <MenubarItem>
            <SignOutButton>
              <div className="group flex w-full cursor-pointer items-center gap-2">
                <LogOut className="h-5 w-5 text-primary group-hover:text-red-600" />
                Deslogar
              </div>
            </SignOutButton>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
