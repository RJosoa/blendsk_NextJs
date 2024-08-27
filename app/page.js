import RangeRankCarousel from "@/components/ui/carousel/RangeRankCarousel.js";
import MapCard from "@/components/ui/card/postMap/MapCard";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <div className="flex justify-center items-center w-full h-screen">
        <h1>Hero</h1>
      </div>
      <div className="flex flex-col w-full h-screen bg-cyan-500">
        <h1>Best range</h1>
        <RangeRankCarousel />
      </div>
      <div className="flex flex-col bg-purple-500 w-screen">
        <div className="flex justify-between px-24 py-7">
          <h2>Explore.</h2>
          <button>more</button>
        </div>

        <MapCard />
      </div>
    </main>
  );
}
