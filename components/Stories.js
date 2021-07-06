import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Steven Suptic",
    story: "https://pbs.twimg.com/media/E3tnKZ3UcAAWkBR.jpg",
    profile: "https://pbs.twimg.com/media/EoLqu3tVkAEi4t8.jpg",
  },
  {
    name: "Disguised Toast",
    story: "https://pbs.twimg.com/media/E2W0dbXVcAALxiR.jpg",
    profile: "https://pbs.twimg.com/media/E13kqFGVEAA7HpZ.jpg",
  },
  {
    name: "itsHafu",
    story: "https://pbs.twimg.com/media/DO3H09PUMAAT8wj.jpg",
    profile: "https://pbs.twimg.com/media/DV-lu6cXkAAgoVd.jpg",
  },
  {
    name: "Finn Balor",
    story: "https://pbs.twimg.com/media/Dwq6UKeW0AA1Ixn.jpg",
    profile: "https://pbs.twimg.com/media/D89XWVBXkAAdxHk.jpg",
  },
  {
    name: "AEW Dynamite",
    story: "https://pbs.twimg.com/media/E4B9R3dVoAIemAb.jpg",
    profile: "https://pbs.twimg.com/media/E3NsrcZX0AEwGtc.jpg",
  },
];
function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story, index) => (
        <StoryCard
          key={index}
          name={story.name}
          story={story.story}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
