import { BackArrow } from "@components/back-arrow";
import { getInternationalScientificCongress } from "@services/international-scientific-congress";
import { Fragment } from "react";
import { ICongress } from "types/congress";

import { Congress } from "./_components/congress";
import { CongressGalleryItem } from "./_components/congress-gallery-item";

export default async function CongressoCientificoInternacional() {
  const congresses = await getInternationalScientificCongress();

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8">
      <BackArrow />
      <div className="space-y-7">
        {congresses.map((congress: ICongress, index: number) => (
          <Fragment key={index}>
            {index > 0 && <hr className="mx-auto w-1/2" />}
            <Congress congress={congress} index={index} />

            {congress.gallery && (
              <section>
                <div className="container mx-auto px-4">
                  <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">
                      Galeria de Fotos
                    </h2>
                    <p className="text-primary text-lg">
                      Registros marcantes do IV Congresso Científico
                      Internacional da RedeCT
                    </p>
                  </div>

                  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {congress.gallery?.map((item, index) => (
                      <CongressGalleryItem key={index} item={item} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
