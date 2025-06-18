import React from "react";
import ImageViewer from "../components/ImageViewer";
import { Link, useParams } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getRelativeDaysAgo } from "../utils/helpers";

const fetchPost = async (slug) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts/${slug}`
  );
  return response.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });
  console.log(data);
  if (isPending) return "Loading...";
  if (isError) return "Something went wrong..." + error.message;
  if (!data) return "No posts found";
  return (
    <div className="flex flex-col gap-12">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 text-gra-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data?.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{getRelativeDaysAgo(data?.createdAt)}</span>
          </div>
          <p className="text-gray-500 font-medium">{data?.desc}</p>
        </div>
        {data.user.img && (
          <div className="hidden lg:block w-2/5">
            <ImageViewer src={data.user.img} w={600} className="rounded-2xl" />
          </div>
        )}
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
              {data.user.img && (
                <ImageViewer
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link className="text-blue-800">{data.user.username}</Link>
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
      {data?._id && <Comments postId={data._id} />}
    </div>
  );
};

export default SinglePostPage;
