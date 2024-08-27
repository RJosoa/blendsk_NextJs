import { signOut } from "@/auth";
import React from "react";

export default function Signout() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="flex justify-center items-center"
    >
      <button
        type="submit"
        className="border border-2 border-slate-950 py-2 px-4 rounded-full"
      >
        Sign Out
      </button>
    </form>
  );
}
