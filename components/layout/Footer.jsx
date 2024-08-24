import Image from "next/image";
import Lightlogo from "@/public/logo/LightmodLogo.svg";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col w-screen h-screen">
      <div className="flex w-full h-full">
        {" "}
        <div className="flex w-1/2 justify-center items-center p-12">
          <Image src={Lightlogo} alt="Lightlogo>" />
        </div>
        <div className="flex justify-center items-center w-1/2 p-12">
          <div className="w-full h-full bg-blue-300 rounded-[50px] p-12">d</div>
        </div>
      </div>
      <div className="h-1/4">
        <p>create by R.J with 💛</p>
      </div>
    </footer>
  );
}
