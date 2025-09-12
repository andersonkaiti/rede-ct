import { SettingsGearIcon } from '@components/icons/settings-gear'
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@components/ui/menubar'
import { Separator } from '@components/ui/separator'
import { getAuthenticatedUser } from '@http/auth/get-user'
import { getInitials } from '@utils/get-initials'
import { ChevronsUpDown, LogOut } from 'lucide-react'
import Link from 'next/link'

export async function UserProfile() {
  const user = await getAuthenticatedUser()

  if (!user) {
    return null
  }

  return (
    <Menubar className="flex w-full border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={user.avatarUrl ?? undefined} />
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            </Avatar>
            <span className="max-w-35 overflow-hidden text-ellipsis whitespace-nowrap">
              {user.name}
            </span>
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </MenubarTrigger>
        <MenubarContent align="end" className="w-fit space-y-2 bg-background">
          <div className="px-2">
            <div className="text-foreground text-sm">E-mail</div>
            {user?.emailAddress && (
              <div className="break-all text-muted-foreground text-xs">
                {user.emailAddress}
              </div>
            )}
          </div>

          <Separator />

          <MenubarItem asChild className="cursor-pointer">
            <Link
              className="group flex w-full cursor-pointer items-center gap-2"
              href="/area-restrita/perfil"
            >
              <SettingsGearIcon className="text-primary" />
              <span>Configurações</span>
            </Link>
          </MenubarItem>

          <Separator />

          <MenubarItem asChild className="cursor-pointer">
            <Link
              className="group flex w-full cursor-pointer items-center gap-2 text-primary"
              href="/api/auth/sign-out"
              prefetch={false}
            >
              <LogOut className="size-3 text-primary" />
              <span className="text-xs">Deslogar</span>
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
