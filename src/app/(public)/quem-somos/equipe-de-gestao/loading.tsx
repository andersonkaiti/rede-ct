import { Skeleton } from '@components/ui/skeleton'
import { ImageIcon } from 'lucide-react'

const ARRAY_SIZE = 9

export default function EquipeDeGestaoLoading() {
  return (
    <Skeleton>
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-12.5 p-5 py-8 lg:p-25">
        <section className="space-y-4 md:space-y-8">
          <div className="mx-auto h-10 w-117.5 rounded-full bg-gray-200" />
          <div className="mb-4 flex items-center justify-center space-x-2">
            <div className="h-1 w-8 rounded-full bg-gray-200" />
            <div className="h-1 w-4 rounded-full bg-gray-200" />
            <div className="h-1 w-2 rounded-full bg-gray-200" />
          </div>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
            {[...new Array(ARRAY_SIZE)].map((_, index: number) => (
              <div
                className="flex flex-1 flex-col items-center justify-center gap-8 p-6"
                key={index}
              >
                <div className="flex size-30 items-center justify-center rounded-full bg-gray-300 ring-4 ring-gray-200">
                  <ImageIcon className="size-10 text-gray-200" />
                </div>

                <div className="flex w-full flex-grow flex-col items-center justify-between gap-2">
                  <div className="h-9 w-full rounded-full bg-gray-200" />
                  <div className="mx-auto h-6.5 w-26.5 rounded-full bg-gray-200" />
                </div>

                <div className="h-11 w-full rounded-md bg-gray-200" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Skeleton>
  )
}
