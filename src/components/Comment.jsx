import React from "react";
import ImageViewer from "./ImageViewer";

const Comment = () => {
  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-xl mb-8">
      <div className="flex gap-4 items-center">
        <ImageViewer
          src="/userImg.jpeg"
          className="w-10 h-10 object-cover rounded-full"
        />
        <h1 className="font-bold text-lg">John Doe</h1>
        <span className="text-gray-400 text-sm">2 days ago</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        eligendi accusamus! Placeat vel sunt adipisci quos, harum obcaecati
        facilis reiciendis iste accusantium possimus aut eius nobis, velit
        labore, numquam suscipit.
      </p>
    </div>
  );
};

export default Comment;
