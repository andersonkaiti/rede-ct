import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, Info } from "lucide-react";

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
  description,
  imageUrl,
  speakerImageUrl,
  link,
  date,
  time,
  speakers,
}: WebinarCardProps) {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/3 bg-gray-100 p-0 flex items-stretch">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src={imageUrl}
              alt={speakers[0].split(' - ')[0]}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
        
        {/* Coluna do Conteúdo */}
        <div className="w-full md:w-2/3 p-6">
          {/* Título */}
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          
          {/* Data e Horário */}
          <div className="mb-4">
            <div className="flex items-center text-blue-600 mb-1">
              <Calendar className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">DATA E HORÁRIO</span>
            </div>
            <p className="text-gray-700 text-sm ml-7">
              {date} | {time}
            </p>
          </div>
          
          {/* Convidada */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-500 mb-2">CONVIDADA</h4>
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <Image
                  src={speakerImageUrl}
                  alt={speakers[0].split('(')[0].trim()}
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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-200"
            >
              ACESSAR CURSO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
