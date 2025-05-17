import { SignUp } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="lg:p-25s mx-auto flex max-w-7xl flex-col justify-center gap-2 space-y-14 p-4 py-10 sm:gap-12.5">
      <SignUp />
    </div>
  );
}
