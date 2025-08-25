'use client'

import { cn } from '@utils/cn'

interface IMenuProps {
  showNavigationBar: boolean
  setShowNavigationBar: React.Dispatch<React.SetStateAction<boolean>>
}

export function Menu({ showNavigationBar, setShowNavigationBar }: IMenuProps) {
  return (
    <button
      className="z-50 flex 2lg:hidden h-10 w-9 cursor-pointer flex-col items-center justify-center"
      onClick={() => setShowNavigationBar(!showNavigationBar)}
      type="button"
    >
      <div
        className={cn(
          'h-[2px] w-[50%] origin-left translate-y-[0.45rem] rounded-sm bg-background invert-100 transition-all duration-300',
          showNavigationBar && 'rotate-[-45deg]'
        )}
      />
      <div
        className={cn(
          'h-[2px] w-[50%] origin-center rounded-md bg-background invert-100 transition-all duration-300',
          showNavigationBar && 'hidden'
        )}
      />
      <div
        className={cn(
          '-translate-y-[0.45rem] h-[2px] w-[50%] origin-left rounded-md bg-background invert-100 transition-all duration-300',
          showNavigationBar && 'rotate-[45deg]'
        )}
      />
    </button>
  )
}
