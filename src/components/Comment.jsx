import React from "react";
import ImageViewer from "./ImageViewer";
import { getRelativeDaysAgo } from "../utils/helpers";

const Comment = ({ desc, createdAt, user }) => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-xl mb-8">
      <div className="flex gap-4 items-center">
        <ImageViewer
          src="/userImg.jpeg"
          className="w-10 h-10 object-cover rounded-full"
        />
        <h1 className="font-bold text-lg">{user.username}</h1>
        <span className="text-gray-400 text-sm">
          {getRelativeDaysAgo(createdAt)}
        </span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default Comment;
