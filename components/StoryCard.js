import Image from "next/image";

function StoryCard({ name, story, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 cursor-pointer lg:h-56 lg:w-36 overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={story}
        layout="fill"
      />
      <p className="absolute  opacity-0 lg:opacity-100 z-50 text-white font-semibold bottom-5">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
