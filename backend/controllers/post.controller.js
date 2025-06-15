import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find1();
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).json(post);
};

export const createPost = async (req, res) => {
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
  const newPost = new Post({ user: user._id, ...req.body });
  const post = newPost.save();
  res.status(200).json(post);
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
