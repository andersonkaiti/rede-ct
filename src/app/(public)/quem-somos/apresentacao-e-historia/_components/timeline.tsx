import { Badge } from "@components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";

interface ITimelineProps {
  item: {
    date: string;
    title: string;
    text: string;
  };
}

export function Timeline({ item }: ITimelineProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_0.5fr_5fr] md:gap-6">
      <Badge className="bg-primary/10 text-primary border-primary/20 h-fit w-full rounded-full border px-3 py-1">
        {item.date}
      </Badge>
      <div className="mt-2 hidden flex-col items-center md:flex">
        <div className="bg-primary size-2 rounded-full p-2"></div>
        <div className="bg-primary/10 h-14 w-0.5 rounded-full"></div>
      </div>
      <Card className="gap-0 shadow-xl transition-all duration-300 hover:shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-justify">{item.text}</p>
        </CardContent>
      </Card>
    </div>
  );
}
