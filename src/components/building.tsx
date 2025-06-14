import { Construction } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface BuildingProps {
  children: React.ReactNode;
}

export function Building({ children }: BuildingProps) {
  return (
    <Card className="flex flex-row items-center gap-5 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-8">
      <div className="rounded-full bg-amber-100 p-3">
        <Construction className="!size-6 text-amber-600" />
      </div>
      <div className="flex flex-col">
        <CardHeader className="p-0">
          <CardTitle className="mb-2 text-lg font-semibold text-amber-800">
            Área em Desenvolvimento
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-amber-700">{children}</CardDescription>
      </div>
    </Card>
  );
}
