import Image from "next/image";
import avatar from "@/public/icons/avatar.png";

export default function UserButton({ showUsername }) {
  const username = "John Doe";
  return (
    <div className="flex justify-center items-center">
      <Image
        src={avatar}
        alt="user photo"
        width={45}
        height={45}
        quality={1}
        priority={true}
        placeholder="blur"
        className="rounded-full"
      />
      {showUsername && <p>{username}</p>}
    </div>
  );
}
