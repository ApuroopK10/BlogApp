import React from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParam) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParam,
      limit: 2,
    },
  });
  return response.data;
};

const PostList = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, status } =
    useInfiniteQuery({
      queryKey: ["posts"],
      queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) =>
        lastPage.hasMore ? pages.length + 1 : undefined,
    });

  if (isFetching) return "Loading...";

  if (status === "error") return "An error has occurred: " + error.message;

  console.log("data", data);

  const allPosts = data?.pages.flatMap((page) => page?.posts) || [];

  return (
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>That's all the posts we have</b>
        </p>
      }
    >
      {/* <div className="flex flex-col gap-12 mb-8"> */}
      {allPosts.map((post) => (
        <PostListItem key={post._id} {...post} />
      ))}
      {/* </div> */}
    </InfiniteScroll>
  );
};

export default PostList;
