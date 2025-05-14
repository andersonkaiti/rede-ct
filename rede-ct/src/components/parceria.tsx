import { IParceria } from "types/parceria";
import { Building2, Calendar } from "lucide-react";
import Image from "next/image";

export function Parceria({
  parceria: {
    name,
    image: { src, alt },
    description,
    startDate,
  },
}: {
  parceria: IParceria;
}) {
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      <div className="relative h-48 w-full lg:flex-1">
        <Image src={src} alt={alt} className="absolute object-contain" fill />
      </div>
      <div className="flex flex-col gap-2 lg:flex-1">
        <h2 className="flex items-center gap-4 text-2xl font-bold">
          <Building2 className="text-indigo-500" />
          {name}
        </h2>
        <h3 className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar className="h-4 w-4" />
          Parceria iniciada em {startDate}
        </h3>
        <p className="flex-2 text-justify text-gray-500">{description}</p>
      </div>
    </div>
  );
}
