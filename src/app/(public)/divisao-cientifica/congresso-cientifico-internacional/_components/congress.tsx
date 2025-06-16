import { RedLink } from "@components/blue-link";
import { Calendar, MapPin } from "lucide-react";
import { ICongress, IDocument } from "types/congress";

export interface ICongressProps {
  congress: ICongress;
  index: number;
}

export function Congress({ congress, index }: ICongressProps) {
  return (
    <div className="flex-1 space-y-4 rounded-md text-justify sm:p-8">
      <header className="space-y-2 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{congress.edition}</h2>
        <p className="text-primary inline-flex items-center gap-2 text-lg font-medium">
          <Calendar className="h-4 w-4" /> {congress.initialDate} a{" "}
          {congress.finalDate}
        </p>
        <h3 className="text-xl font-semibold">{congress.title}</h3>
        <p className="text-primary inline-flex items-center gap-2 text-lg font-medium">
          <MapPin className="h-4 w-4" />
          <span>{congress.location}</span>
        </p>
      </header>
      <div className="space-y-4 text-justify text-gray-700">
        <p dangerouslySetInnerHTML={{ __html: congress.description }} />
      </div>
      <div className="flex flex-wrap justify-center gap-4 pt-4">
        {congress.documents.map((document: IDocument) => (
          <RedLink
            key={`${index}-${document.title}-${document.url}`}
            href={document.url}
          >
            <span className="font-medium">{document.title}</span>
          </RedLink>
        ))}
      </div>
    </div>
  );
}
