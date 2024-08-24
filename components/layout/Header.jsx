import Link from "next/link";
import DarkLogo from "@/public/logo/LightmodLogo.svg";
import Image from "next/image";

export default function Header() {
  const isLogin = false;
  const username = "persona1";

  return (
    <header className="absolute w-screen flex justify-between items-center p-5">
      <Link href={"/"}>
        <Image alt="DarkLogo" src={DarkLogo} width={195}/>
      </Link>
      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-5">
        <Link href={"/explore"}>Explore</Link>
        <Link href={"/award"}>Award</Link>
      </nav>
      <div className="flex gap-5">
        {isLogin ? (
          <>
            <button>Log out</button>
            <Link href={`/${username}`}>Profile</Link>
          </>
        ) : (
          <>
            <Link href={"/login"}>Log in</Link>
            <Link href={"/signup"}>Sign up</Link>
          </>
        )}
      </div>
    </header>
  );
}
