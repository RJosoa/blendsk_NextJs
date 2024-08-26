import { signIn } from "@/auth";
import Image from "next/image";
import google from "@/public/google.svg";

export default function GoogleProvider() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="flex w-full justify-center gap-4 p-4 rounded-full border border-slate-950/15"
        type="submit"
      >
        <Image src={google} alt="google" width={24} />
        <p>Signin with Google</p>
      </button>
    </form>
  );
}
