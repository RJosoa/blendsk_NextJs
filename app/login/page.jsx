import GoogleProvider from "@/components/ui/buttons/GoogleProvider";
import LoginForm from "@/components/ui/forms/LoginForm";
import symbole from "@/public/logo/DarkSymbole.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div className="absolute z-20">
      <div className="flex bg-slate-50 w-screen h-screen p-20">
        <div className="w-1/2">
          <h1>Login.</h1>
        </div>
        <div className="absolute right-4 top-4 rounded-lg">
          <Link href={"/"}>
            <Image src={symbole} alt="blendsk symbole" width={45} />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-[450px] gap-8 font-medium ">
          <h3>Sign in to Blendsk</h3>
          <GoogleProvider />
          <LoginForm />
        </div>
        <div className="absolute bottom-8 left-8">
          <p className="sign">
            Not registered yet? Create your account and start <br />{" "}
            personalizing now!,{" "}
            <Link href={"/register"} className="signLink">
              Sign up .
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
