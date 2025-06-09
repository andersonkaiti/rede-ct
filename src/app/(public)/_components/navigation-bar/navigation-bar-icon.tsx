import { LucideIcon } from "lucide-react";

export interface INavigationBarIconProps {
  icon: LucideIcon | undefined;
}

export function NavigationBarIcon({ icon: Icon }: INavigationBarIconProps) {
  return (
    <>
      {Icon && (
        <div className="2lg:bg-gray-400/20 2lg:p-2 2lg:group-hover:bg-[#171717] rounded-md">
          <Icon className="2lg:group-hover:text-white h-4 w-4" />
        </div>
      )}
    </>
  );
}
