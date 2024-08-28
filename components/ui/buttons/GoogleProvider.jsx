import { signIn } from "@/auth";

import { FcGoogle } from "react-icons/fc";

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
        <FcGoogle size={24} />
        <p>Signin with Google</p>
      </button>
    </form>
  );
}
