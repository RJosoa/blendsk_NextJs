import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-5 mt-5">
      <Link href={"/"}>Blendsk</Link>
      <nav>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/award"}>Award</Link>
      </nav>
      <div>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
      </div>
    </header>
  );
}
