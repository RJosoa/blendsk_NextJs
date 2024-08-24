
"use client"
import RangeRankCard from "../card/RangeRankCard";
import useEmblaCarousel from "embla-carousel-react";

export default function RangeRankCarousel() {
  const cardInfo = ["Essential", "Optimize", "Advance"];
  const [emblaRef] = useEmblaCarousel();
  return (
     <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
    // <div className="flex justify-center bg-cyan-400 items-center w-screen h-full gap-10">
    //   {cardInfo.map((info, index) => (
    //     <RangeRankCard key={index} rank={info} />
    //   ))}
    // </div>
  );
}
