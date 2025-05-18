import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import * as Menubar from "@components/ui/menubar";
import { ChevronsUpDown, LogOut } from "lucide-react";

export async function UserProfile() {
  const user = await currentUser();

  return (
    <Menubar.Root className="flex w-full border-none bg-transparent shadow-none">
      <Menubar.Menu>
        <Menubar.Trigger className="flex w-full cursor-pointer items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-3">
            <Image
              src={user?.imageUrl || ""}
              alt="User profile"
              width={36}
              height={36}
              className="rounded-md"
            />
            {user?.firstName} {user?.lastName}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Menubar.Trigger>
        <Menubar.Content>
          <Menubar.Item>
            <SignOutButton>
              <div className="group flex w-full cursor-pointer items-center gap-2">
                <LogOut className="h-5 w-5 text-indigo-500 group-hover:text-indigo-600" />
                Deslogar
              </div>
            </SignOutButton>
          </Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  );
}
