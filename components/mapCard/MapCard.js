import PostCard from "../card/PostCard";

export default function MapCard() {
  const cardInfo = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const maxItems = 12;

  return (
    <div className="flex justify-center w-full bg-red-200 py-20">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {cardInfo.slice(0, maxItems).map((info, index) => (
          <PostCard key={index} number={info} />
        ))}
      </div>
    </div>
  );
}
