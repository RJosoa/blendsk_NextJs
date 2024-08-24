import MapCard from "@/components/mapCard/MapCard";
import React from "react";

import newsletter from "@/public/icons/mailBox.svg";
import Image from "next/image";

export default function explore() {
  return (
    <div className="w-screen">
      <div className="flex justify-between w-full h-[400px] items-center p-20">
        <h1>Explore.</h1>
        <div className="flex gap-3 items-center">
          <Image alt="newsletter" src={newsletter} width={"50"}/>
          <div>
            <div>Need to receive news?</div>
            <div className="text-amber-700">Recieve newsletters</div>
          </div>
        </div>
      </div>
      <div>
        <MapCard />
      </div>
    </div>
  );
}
