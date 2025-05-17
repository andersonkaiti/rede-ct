import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center gap-2 space-y-14 p-4 py-10 sm:gap-12.5 lg:p-25">
      <SignIn />
    </div>
  );
}
