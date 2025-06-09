"use client";

interface IError {
  error: Error;
}

export default function Error({ error }: IError) {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <p className="mb-4 text-lg font-light text-red-500">
              {error.message}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
