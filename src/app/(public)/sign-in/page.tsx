import Image from 'next/image'
import { SignInForm } from './_components/form'

export default function SignInPage() {
  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-20 space-y-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="relative mx-auto size-10">
          <Image
            alt="Rede CT"
            className="object-contain invert-100 dark:invert-0"
            fill
            src="/images/favicon.png"
          />
        </div>
        <h2 className="text-center font-semibold text-2xl/9 text-foreground tracking-tight">
          Acesse sua conta
        </h2>
      </div>

      <SignInForm />
    </div>
  )
}
