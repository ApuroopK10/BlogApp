import React from "react";
import ImageViewer from "./ImageViewer";
import { Link } from "react-router-dom";
import { getRelativeDaysAgo } from "../utils/helpers";

const PostListItem = ({
  img,
  title,
  category,
  desc,
  slug,
  createdAt,
  user,
}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageViewer
          className="rounded-2xl object-cover h-[207px]"
          src={img?.length > 0 ? img : null}
          w="732"
          alt="post"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          {title}
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to="" className="text-blue-800">
            {user?.username}
          </Link>
          <span>On</span>
          <Link to="" className="text-blue-800">
            {category}
          </Link>
          <span>{getRelativeDaysAgo(createdAt)}</span>
        </div>
        <p>{desc}</p>
        <Link className="underline text-sm text-blue-800" to={`/${slug}`}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
