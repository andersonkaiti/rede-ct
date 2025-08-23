import { Badge } from '@components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card'

interface ITimelineProps {
  item: {
    date: string
    title: string
    text: string
  }
}

export function Timeline({ item }: ITimelineProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_0.5fr_5fr] md:gap-6">
      <Badge className="h-fit w-full rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
        {item.date}
      </Badge>
      <div className="mt-2 hidden flex-col items-center md:flex">
        <div className="size-2 rounded-full bg-primary p-2" />
        <div className="h-14 w-0.5 rounded-full bg-primary/10" />
      </div>
      <Card className="gap-0 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="font-semibold text-2xl">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-justify text-muted-foreground">{item.text}</p>
        </CardContent>
      </Card>
    </div>
  )
}
