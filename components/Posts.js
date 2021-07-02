import Post from "./Post";

function Posts() {
  const posts = [
    {
      title: "Disguised Toast",
      profile: "https://pbs.twimg.com/media/E13kqFGVEAA7HpZ.jpg",
      description: "Check out my interview with the guys over at Dexerto.",
      timestamp: "1h",
      media: "https://pbs.twimg.com/media/DNlNOuuVwAcxYFp.jpg",
    },
    {
      title: "JS Mastery",
      profile:
        "https://pbs.twimg.com/profile_images/1084342761644572672/WTytSpjs.jpg",
      description:
        "Check out my new video about UI Design! Link in the pinned comment",
      timestamp: "3h",
      media: "https://pbs.twimg.com/media/EjUAZO-VgAALy38.jpg",
    },
    {
      title: "Steven Suptic",
      profile: "https://pbs.twimg.com/media/EoLqu3tVkAEi4t8.jpg",
      description: "Dumb and Dumber sweep the lobby in one round. ",
      timestamp: "5h",
      media: "https://i.ytimg.com/vi/16nHT7v0UVA/maxresdefault.jpg",
    },
    {
      title: "AEW Dynamite",
      profile: "https://pbs.twimg.com/media/E3NsrcZX0AEwGtc.jpg",
      description:
        "The AEW World Champion Kenny Omega addresses his opponent for All Out LIVE this Wednesday on TNT!",
      timestamp: "Yesterday at 14:31",
      media: "https://pbs.twimg.com/media/Eo-0CJ4XYAEqSNS.jpg",
    },
    {
      title: "Finn Balor",
      profile: "https://pbs.twimg.com/media/D89XWVBXkAAdxHk.jpg",
      description: "The calm before the storm...",
      timestamp: "Yesterday at 11:49",
      media: "https://pbs.twimg.com/media/CpYlqyAUIAAAmeH.jpg",
    },
  ];

  return (
    <div>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          profile={post.profile}
          description={post.description}
          timestamp={post.timestamp}
          media={post.media}
        />
      ))}
    </div>
  );
}

export default Posts;
