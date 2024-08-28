import GoogleProvider from "@/components/ui/buttons/GoogleProvider";
import RegisterForm from "@/components/ui/forms/RegisterForm";
import symbole from "@/public/logo/DarkSymbole.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function registerPage() {
  return (
    <div className="absolute z-20">
      <div className="flex bg-slate-50 w-screen h-screen p-20">
        <div className="w-1/2">
          <h1>Register.</h1>
        </div>
        <div className="absolute right-4 top-4 rounded-lg">
          <Link href={"/"}>
            <Image src={symbole} alt="blendsk symbole" width={45} />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center w-[450px] gap-8 font-medium ">
          <h3>Sign up to Blendsk</h3>
          <GoogleProvider />
          <RegisterForm />
        </div>
        <div className="absolute bottom-8 left-8">
          <p className="sign">
            Already registered? Log in to access your account and find your{" "}
            <br />
            favorite templates,{" "}
            <Link href={"/login"} className="signLink">
              sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
