import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { PhotographIcon, VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const name = "Rohan";
  const profilePicture = "https://pbs.twimg.com/media/EWF7yULUcAIZ9Wo.jpg";

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 ">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={profilePicture}
          height={40}
          width={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none hover:bg-gray-200 cursor-pointer"
            type="text"
            placeholder={`What's on your mind, ${name}?`}
          />
        </form>
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="featureIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div className="featureIcon">
          <PhotographIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
        </div>
        <div className="featureIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
