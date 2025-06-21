import React from "react";
import ImageViewer from "./ImageViewer";
import { getRelativeDaysAgo } from "../utils/helpers";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Comment = ({ desc, createdAt, user: userComment, postId }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const role = user?.publicMetadata?.role;
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const token = await getToken();
      return axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${userComment._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Comment deleted");
      queryClient.invalidateQueries({ queryKey: ["comments", postId] });
    },
    onError: (error) => {
      toast.error(error.response.data);
    },
  });
  return (
    <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-xl mb-8">
      <div className="flex gap-4 items-center">
        <ImageViewer
          src="/userImg.jpeg"
          className="w-10 h-10 object-cover rounded-full"
        />
        <h1 className="font-bold text-lg">{userComment?.username}</h1>
        <span className="text-gray-400 text-sm">
          {getRelativeDaysAgo(createdAt)}
        </span>
        {user &&
          (user.username === userComment?.username || role === "admin") && (
            <span
              className="text-xs text-red-300 hover:text-red-400 cursor-pointer"
              onClick={() => deleteMutation.mutate()}
            >
              Delete
              {deleteMutation.isPending && <span>(in Progress)</span>}
            </span>
          )}
      </div>
      <div className="mt-4">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Comment;
