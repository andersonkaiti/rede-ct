import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WebinarCardProps {
  title: string;
  description: string;
  imageUrl: string;
  speakerImageUrl: string;
  link: string;
  date: string;
  time: string;
  speakers: string[];
}

export function WebinarCard({
  title,
  imageUrl,
  speakerImageUrl,
  link,
  date,
  time,
  speakers,
}: WebinarCardProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Coluna da Imagem */}
        <div className="flex w-full items-stretch bg-gray-100 p-0 md:w-1/3">
          <div className="relative h-64 w-full md:h-auto">
            <Image
              src={imageUrl}
              alt={speakers[0].split(" - ")[0]}
              fill
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Coluna do Conteúdo */}
        <div className="w-full p-6 md:w-2/3">
          {/* Título */}
          <h3 className="mb-4 text-2xl font-bold text-gray-800">{title}</h3>

          {/* Data e Horário */}
          <div className="mb-4">
            <div className="mb-1 flex items-center text-blue-600">
              <Calendar className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">DATA E HORÁRIO</span>
            </div>
            <p className="ml-7 text-sm text-gray-700">
              {date} | {time}
            </p>
          </div>

          {/* Convidada */}
          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-gray-500">
              CONVIDADA
            </h4>
            <div className="flex items-center">
              <div className="relative mr-3 h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                <Image
                  src={speakerImageUrl}
                  alt={speakers[0].split("(")[0].trim()}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <p className="text-gray-800">{speakers[0]}</p>
            </div>
          </div>

          {/* Botão */}
          <div className="mt-6">
            <Link
              href={link}
              className="inline-block rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              ACESSAR CURSO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
