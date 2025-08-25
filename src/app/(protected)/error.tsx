'use client'

interface IError {
  error: Error
}

export default function ErrorMessage({ error }: IError) {
  return (
    <main>
      <section className="bg-background dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 font-light text-lg text-primary">
              {error.message}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
