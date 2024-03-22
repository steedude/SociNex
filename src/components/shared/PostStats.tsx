import { Models } from "appwrite";
import { useState } from "react";
import { useLocation } from "react-router-dom";

type PostStatsProps = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  const location = useLocation();
  const likesList = post.likes.map((user: Models.Document) => user.$id);

  const [likes, setLikes] = useState<string[]>(likesList);
  const [isSaved, setIsSaved] = useState(false);

  const containerStyles = location.pathname.startsWith("/profile")
    ? "w-full"
    : "";
  return (
    <div
      className={`flex justify-between items-center z-20 ${containerStyles}`}>
      <div className="flex gap-2 mr-5">
        <img
          src="/assets/icons/like.svg"
          // src={`${
          //   checkIsLiked(likes, userId)
          //     ? "/assets/icons/liked.svg"
          //     : "/assets/icons/like.svg"
          // }`}
          alt="like"
          width={20}
          height={20}
          // onClick={(e) => handleLikePost(e)}
          onClick={() => {}}
          className="cursor-pointer"
        />
        <p className="small-medium lg:base-medium">{likes.length}</p>
      </div>

      <div className="flex gap-2">
        <img
          src={isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"}
          alt="share"
          width={20}
          height={20}
          className="cursor-pointer"
          // onClick={(e) => handleSavePost(e)}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default PostStats;
