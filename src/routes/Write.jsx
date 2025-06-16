import { useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts/post`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast.success("Post has been created");
      navigate(`/${res.data.slug}`);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    mutation.mutate(data);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>Sign In please!!</div>;
  }
  return (
    <div className="flex gap-6 flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80)]">
      <h1 className="text-xl font-light">Create a New Post</h1>
      <form
        className="flex flex-col gap-6 flex-1 mb-6"
        onSubmit={handleFormSubmit}
      >
        <button className="bg-gray-100 rounded-2xl p-2 text-gray-700 shadow-md w-max">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="bg-transparent text-4xl font-semibold outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          name="desc"
          placeholder="A short description"
          className="p-4 rounded-xl bg-white shadow-md"
        ></textarea>
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md"
          value={value}
          onChange={setValue}
        />
        <button
          disabled={mutation.isPending}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full w-max disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading" : "Send"}
        </button>
        {mutation.isError && (
          <span>An error occurred: {mutation.error.message}</span>
        )}
      </form>
    </div>
  );
};

export default Write;
