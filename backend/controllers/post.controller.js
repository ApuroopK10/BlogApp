import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
  console.log("inside create");
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({
    clerkUserId,
  });

  if (!user) {
    return res.status(404).json("User not found");
  }

  let slug = req.body.title.replace(/ /g, "-").toLowerCase();

  let postExists = await Post.findOne({ slug });

  let counter = 2;

  while (postExists) {
    slug = `${slug}-${counter}`;
    postExists = await Post.findOne({ slug });
    counter++;
  }
  const newPost = new Post({ user: user._id, ...req.body, slug });
  const post = await newPost.save();
  res.status(200).json({ status: "success", data: post });
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({
    clerkUserId,
  });

  if (!user) {
    return res.status(404).json("User not found");
  }
  const post = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!post) {
    return res.status(403).json("You can only delete your post");
  }
  res.status(200).json({ status: "Post deleted" });
};

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
