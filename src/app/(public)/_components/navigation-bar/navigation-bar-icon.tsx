import type { LucideIcon } from 'lucide-react'

interface INavigationBarIconProps {
  icon: LucideIcon | undefined
}

export function NavigationBarIcon({ icon: Icon }: INavigationBarIconProps) {
  return (
    <>
      {Icon && (
        <div className="rounded-md 2lg:bg-foreground/10 2lg:p-2 2lg:group-hover:bg-foreground">
          <Icon className="h-4 w-4 2lg:group-hover:text-background" />
        </div>
      )}
    </>
  )
}
