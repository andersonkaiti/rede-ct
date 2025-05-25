import Image from "next/image";
import { Fragment } from "react";
import { BlueLink } from "@components/blue-link";
import { NavigationCard } from "@components/navigation-card";
import { getInternationalScientificCongress } from "@services/international-scientific-congress";
import { Calendar, MapPin, Newspaper } from "lucide-react";
import { ICongress, IDocument } from "types/congress";

export default async function CongressoCientificoInternacional() {
  const congresses = await getInternationalScientificCongress();

  return (
    <main className="mx-auto max-w-7xl space-y-12 p-4 py-10 md:p-10">
      <div className="space-y-16 sm:space-y-24">
        {congresses.map((congress: ICongress, index: number) => (
          <Fragment key={index}>
            {index > 0 && <hr className="mx-auto w-1/2" />}
            <div className="flex-1 space-y-4 rounded-md p-8 text-justify">
              <header className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
                  {congress.edition}
                </h2>
                <p className="inline-flex items-center gap-2 text-lg font-medium text-blue-700">
                  <Calendar className="h-4 w-4" /> {congress.initialDate} a{" "}
                  {congress.finalDate}
                </p>
                <h3 className="text-xl font-semibold text-gray-700">
                  {congress.title}
                </h3>
                <p className="inline-flex items-center gap-2 text-lg font-medium text-blue-700">
                  <MapPin className="h-4 w-4" />
                  <span>{congress.location}</span>
                </p>
              </header>
              <div className="space-y-4 text-justify text-gray-700">
                <p dangerouslySetInnerHTML={{ __html: congress.description }} />
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                {congress.documents.map((document: IDocument) => (
                  <BlueLink
                    key={`${index}-${document.title}-${document.url}`}
                    href={document.url}
                  >
                    <span className="font-medium">{document.title}</span>
                  </BlueLink>
                ))}
              </div>
            </div>

            {/* Galeria de Fotos */}
            {congress.gallery && (
              <section>
                <div className="container mx-auto px-4">
                  <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                      Galeria de Fotos
                    </h2>
                    <p className="text-lg text-gray-600">
                      Registros marcantes do IV Congresso Científico
                      Internacional da RedeCT
                    </p>
                  </div>

                  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {congress.gallery?.map((item, index) => (
                      <div
                        key={index}
                        className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                      >
                        <div className="relative h-56 w-full overflow-hidden">
                          <Image
                            src={item.url}
                            alt={item.caption}
                            fill
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <h3 className="leading-tight">{item.caption}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        ))}
      </div>

      <NavigationCard.BlueRoot href="/divisão-cientifica/noticias">
        <div className="flex items-center gap-2">
          <Newspaper />
          <span>Ver Mais Notícias</span>
        </div>
      </NavigationCard.BlueRoot>
    </main>
  );
}
