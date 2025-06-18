import React, { useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const fetchComments = async (postId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return response.data;
};

const Comments = ({ postId }) => {
  const { getToken } = useAuth();
  const { user } = useUser();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: (res) => {
      toast.success("Comment added");
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });

  const handleAddComment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutation.mutate({ desc: formData.get("desc") });
  };
  console.log("comments", data);
  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-8">
      <h1 className="underline text-gray-500 text-xl">Comments</h1>
      <form
        onSubmit={handleAddComment}
        className="flex gap-6 items-center justify-between w-full"
      >
        <textarea
          placeholder="Write a comment.."
          className="w-full p-4 rounded-xl"
          name="desc"
        ></textarea>
        <button className="bg-blue-900 text-white rounded-md px-4 py-2">
          Send
        </button>
      </form>
      {isPending ? (
        "Loading Comments.."
      ) : isError ? (
        "Error loading comments.."
      ) : (
        <>
          {" "}
          {mutation.isPending && (
            <Comment
              desc={`${mutation.variables.desc} (Sending...)`}
              createdAt={new Date()}
              user={{ img: user.img, username: user.username }}
            />
          )}{" "}
          {data.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
