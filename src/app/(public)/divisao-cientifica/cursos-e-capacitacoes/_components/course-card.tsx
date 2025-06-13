import { Calendar, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  imageUrl,
  link,
  date,
  time,
  location,
  vacancies,
  category,
}: CourseCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Coluna da Imagem */}
        <div className="flex w-full items-stretch bg-gray-100 p-0 md:w-1/3">
          <div className="relative h-64 w-full md:h-auto">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
        </div>

        {/* Coluna do Conteúdo */}
        <div className="w-full p-6 md:w-2/3">
          {/* Categoria */}
          <span className="mb-4 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
            {category}
          </span>

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

          {/* Local */}
          <div className="mb-4">
            <div className="flex items-center text-blue-600">
              <MapPin className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">LOCAL</span>
            </div>
            <p className="ml-7 text-sm text-gray-800">{location}</p>
          </div>

          {/* Vagas */}
          <div className="mb-6">
            <div className="flex items-center text-blue-600">
              <Users className="mr-2 h-5 w-5" />
              <span className="text-sm font-semibold">VAGAS</span>
            </div>
            <p className="ml-7 text-sm text-gray-800">{vacancies}</p>
          </div>

          {/* Botão */}
          <div className="mt-6">
            <Link
              href={link}
              className="inline-block rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
            >
              INSCREVA-SE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
