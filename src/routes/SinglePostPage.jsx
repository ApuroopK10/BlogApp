import React from "react";
import ImageViewer from "../components/ImageViewer";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-12">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gra-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            repellat hic amet quos pariatur laboriosam quam impedit ipsum
            sapiente eaque magnam nemo, commodi enim sed neque dolorum
            consectetur perspiciatis nam.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <ImageViewer src="/postImg.jpeg" w={600} className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestias ex ducimus, porro illum debitis nemo incidunt quae
            provident omnis similique fugiat voluptates eos maxime minus
            eligendi fugit saepe possimus!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. ImpeditLorem, ipsum dolor sit amet consectetur
            adipisicing elit. Corporis molestias ex ducimus, porro illum debitis
            nemo incidunt quae provident omnis similique fugiat voluptates eos
            maxime minus eligendi fugit saepe possimus!Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Impedit
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <ImageViewer
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>

            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <ImageViewer src="facebook.svg" />
              </Link>
              <Link>
                <ImageViewer src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              All
            </Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
