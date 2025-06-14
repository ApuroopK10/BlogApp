import React from "react";
import ImageViewer from "./ImageViewer";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <ImageViewer
          className="rounded-2xl object-cover"
          src="/postImg.jpeg"
          w="732"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link to="" className="text-blue-800">
            John Doe
          </Link>
          <span>On</span>
          <Link to="" className="text-blue-800">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In odit optio
          quod eaque sequi est commodi, impedit facilis reiciendis iure?
          Consequuntur blanditiis, eum culpa excepturi quas aut incidunt alias
          necessitatibus.
        </p>
        <Link className="underline text-sm text-blue-800">Read more</Link>
      </div>
    </div>
  );
};

export default PostListItem;
