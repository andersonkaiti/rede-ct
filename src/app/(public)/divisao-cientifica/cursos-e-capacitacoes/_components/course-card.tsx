import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
  time: string;
  location: string;
  vacancies: string;
  category: string;
}

export function CourseCard({
  title,
  description,
  imageUrl,
  link,
  date,
  time,
  location,
  vacancies,
  category,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        {/* Coluna da Imagem */}
        <div className="w-full md:w-1/3 bg-gray-100 p-0 flex items-stretch">
          <div className="relative w-full h-64 md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>
        
        {/* Coluna do Conteúdo */}
        <div className="w-full md:w-2/3 p-6">
          {/* Categoria */}
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mb-4">
            {category}
          </span>
          
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
          
          {/* Local */}
          <div className="mb-4">
            <div className="flex items-center text-blue-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">LOCAL</span>
            </div>
            <p className="text-gray-800 text-sm ml-7">{location}</p>
          </div>
          
          {/* Vagas */}
          <div className="mb-6">
            <div className="flex items-center text-blue-600">
              <Users className="h-5 w-5 mr-2" />
              <span className="text-sm font-semibold">VAGAS</span>
            </div>
            <p className="text-gray-800 text-sm ml-7">{vacancies}</p>
          </div>
          
          {/* Botão */}
          <div className="mt-6">
            <Link
              href={link}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md text-sm transition-colors duration-200"
            >
              INSCREVA-SE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
