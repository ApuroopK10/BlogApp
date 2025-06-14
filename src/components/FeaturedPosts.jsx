import React from "react";
import { Link } from "react-router-dom";
import ImageViewer from "./ImageViewer";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <ImageViewer
          src="/featured1.jpeg"
          className="rounded-3xl object-cover"
          alt="featured"
        />
        <div className="flex gap-8 items-center">
          <h1 className="font-bold lg:text-lg">01.</h1>
          <Link to={`/`} className="text-blue-800 lg:text-lg">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        <Link
          to="/test"
          className="font-semibold text-xl lg:text-3xl lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-start">
        <div className="flex justify-between gap-4 lg:h-1/3">
          <ImageViewer
            src="/featured2.jpeg"
            alt="Featured2"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3">
            <div className="flex gap-12 items-center">
              <h1 className="font-semibold lg:text-lg">01.</h1>
              <Link to={`/`} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="font-semibold text-lg lg:text-2xl lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-4 lg:h-1/3">
          <ImageViewer
            src="/featured3.jpeg"
            alt="Featured2"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3">
            <div className="flex gap-12 items-center">
              <h1 className="font-bold lg:text-lg">01.</h1>
              <Link to={`/`} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="font-semibold text-lg lg:text-2xl lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-4 lg:h-1/3">
          <ImageViewer
            src="/featured4.jpeg"
            alt="Featured2"
            className="rounded-3xl object-cover w-1/3"
          />
          <div className="w-2/3">
            <div className="flex gap-12 items-center">
              <h1 className="font-bold lg:text-lg">01.</h1>
              <Link to={`/`} className="text-blue-800 lg:text-lg">
                Web Design
              </Link>
              <span className="text-gray-500">2 days ago</span>
            </div>
            <Link
              to="/test"
              className="font-semibold text-lg lg:text-2xl lg:font-bold"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
