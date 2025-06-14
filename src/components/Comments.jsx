import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-8">
      <h1 className="underline text-gray-500 text-xl">Comments</h1>
      <div className="flex gap-6 items-center justify-between w-full">
        <textarea
          placeholder="Write a comment.."
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="bg-blue-900 text-white rounded-md px-4 py-2">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
