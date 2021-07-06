import Image from "next/image";
import { ThumbUpIcon, ShareIcon, ChatAltIcon } from "@heroicons/react/outline";

function Post({ title, description, profile, timestamp, media }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t shadow-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={profile}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{title}</p>

            <p className="text-xs text-gray-400">{timestamp}</p>
          </div>
        </div>
        <p className="pt-4">{description}</p>
      </div>

      {media && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={media} layout="fill" objectFit="cover" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="featureIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base text-gray-500">Like</p>
        </div>
        <div className="featureIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base text-gray-500">Comment</p>
        </div>
        <div className="featureIcon rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base text-gray-500">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
