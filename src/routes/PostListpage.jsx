import React, { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListpage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        className="bg-blue-800 text-sm text-white rounded-2xl px-4 py-2 mb-4 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div
          className={`md:sticky md:top-8 md:h-max ${
            !open ? "hidden md:block" : ""
          }`}
        >
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListpage;
