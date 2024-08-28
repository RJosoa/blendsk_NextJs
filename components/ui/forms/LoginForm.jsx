import { signIn } from "@/auth";
import React from "react";

export default function LoginForm() {
  return (
    <form
      className="flex flex-col gap-8 w-full"
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
    >
      <div className="flex flex-col">
        <label htmlFor="username">Username or Email</label>
        <input
          type="text"
          name="identifier"
          placeholder="John Doe or Johndoe@example.xx"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="+6 characters" />
      </div>

      <button
        className="gap-4 p-4 rounded-full border bg-slate-950 text-slate-200 font-medium"
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
}
