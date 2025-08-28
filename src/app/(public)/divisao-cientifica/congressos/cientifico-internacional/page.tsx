import { BackArrow } from '@components/back-arrow'
import { getInternationalScientificCongress } from '@mocks/congresses/international-scientific-congress'
import { Fragment } from 'react'
import { Congress } from './_components/congress'
import { CongressGalleryItem } from './_components/congress-gallery-item'

export default async function CongressoCientificoInternacional() {
  const congresses = await getInternationalScientificCongress()

  return (
    <main className="mx-auto flex max-w-7xl flex-col justify-center gap-12.5 p-5 py-8">
      <BackArrow />
      <div className="space-y-7">
        {congresses.map((congress, index: number) => (
          <Fragment key={index}>
            {index > 0 && <hr className="mx-auto w-1/2" />}
            <Congress congress={congress} index={index} />

            {congress.gallery && (
              <section>
                <div className="container mx-auto px-4">
                  <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-4 font-bold text-3xl">
                      Galeria de Fotos
                    </h2>
                    <p className="text-lg text-primary">
                      Registros marcantes do IV Congresso Científico
                      Internacional da RedeCT
                    </p>
                  </div>

                  <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {congress.gallery?.map((item, galleryIndex: number) => (
                      <CongressGalleryItem item={item} key={galleryIndex} />
                    ))}
                  </div>
                </div>
              </section>
            )}
          </Fragment>
        ))}
      </div>
    </main>
  )
}
