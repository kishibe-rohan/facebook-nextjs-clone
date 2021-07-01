import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  PlayIcon,
  SearchIcon,
  UsersIcon,
  ArchiveIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/client";

import HeaderIcon from "./HeaderIcon";

function Header() {
  const [session] = useSession();

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png"
          width={60}
          height={40}
          layout="fixed"
        />

        {/* SearchBar */}
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500 hidden md:inline-flex"
            type="text"
            placeholder="Search Facebook.."
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex justify-center flex-grow ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={UsersIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ArchiveIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Profile*/}
      <div className="flex justify-end items-center sm:space-x-2 ">
        {/*<Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
       */}
        <p className="font-semibold pr-3 whitespace-nowrap">Kishibe Rohan</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
