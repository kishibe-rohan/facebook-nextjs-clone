import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";

import Contact from "../components/Contact";

function Widgets() {
  const contacts = [
    {
      title: "Disguised Toast",
      profile: "https://pbs.twimg.com/media/E13kqFGVEAA7HpZ.jpg",
    },
    {
      title: "JS Mastery",
      profile:
        "https://pbs.twimg.com/profile_images/1084342761644572672/WTytSpjs.jpg",
    },
    {
      title: "Steven Suptic",
      profile: "https://pbs.twimg.com/media/EoLqu3tVkAEi4t8.jpg",
    },
    {
      title: "Mohit K",
      profile:
        "https://pbs.twimg.com/profile_images/756190072882376704/_w8TG1Md_400x400.jpg",
    },
    {
      title: "Finn Balor",
      profile: "https://pbs.twimg.com/media/D89XWVBXkAAdxHk.jpg",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact, index) => (
        <Contact key={index} title={contact.title} profile={contact.profile} />
      ))}
    </div>
  );
}

export default Widgets;
