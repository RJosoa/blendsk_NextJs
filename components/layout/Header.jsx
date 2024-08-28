import Link from "next/link";
import DarkLogo from "@/public/logo/LightmodLogo.svg";
import Image from "next/image";
import { auth } from "@/auth";
import Signout from "../ui/buttons/Signout";
import AvatarMenu from "../../components/ui/AvatarMenu";

export default async function Header() {
  const session = await auth();
  console.log("Session:", session);

  const isLogin = true;
  const username = "persona1";

  return (
    <header className="absolute w-screen flex justify-between items-center p-5">
      <Link href={"/"}>
        <Image alt="DarkLogo" src={DarkLogo} width={195} />
      </Link>
      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-5">
        <Link href={"/explore"}>Explore</Link>
        <Link href={"/award"}>Award</Link>
      </nav>
      <div className="flex gap-5">
        {isLogin ? (
          <>
            <Link href={`/${username}`}>
              <AvatarMenu />
            </Link>
            <Signout />
          </>
        ) : (
          <>
            <Link href={"/login"}>Log in</Link>
            <Link href={"/register"}>Sign up</Link>
          </>
        )}
      </div>
    </header>
  );
}
