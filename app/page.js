import RangeRankCarousel from "@/components/carousel/RangeRankCarousel.js";
import MapCard from "@/components/mapCard/MapCard";

export default function Home() {
  return (
    <main className="flex flex-col w-screen">
      <p className="w-full h-screen bg-red-500">HERO</p>
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
