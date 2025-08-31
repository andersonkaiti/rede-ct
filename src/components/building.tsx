import { ConstructionIcon } from './icons/construction'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

interface BuildingProps {
  children: React.ReactNode
}

export function Building({ children }: BuildingProps) {
  return (
    <Card className="flex flex-row items-center gap-5 border-primary/25 bg-primary/5 p-8">
      <div className="rounded-full bg-primary/20 p-3">
        <ConstructionIcon className="text-primary" />
      </div>
      <div className="flex flex-col">
        <CardHeader className="p-0">
          <CardTitle className="mb-2 font-semibold text-lg text-primary">
            Área em Desenvolvimento
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-primary">{children}</CardDescription>
      </div>
    </Card>
  )
}
