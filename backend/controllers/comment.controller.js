import Comment from "../models/comment.model.js";
import User from "../models/user.model.js";

export const getPostComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("user", "username img")
    .sort({ createdAt: -1 });
  res.json(comments);
};

export const addComment = async (req, res) => {
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
  const newComment = new Comment({
    post: req.params.postId,
    user: user._id,
    ...req.body,
  });
  const savedComment = await newComment.save();
  res.json(201).json(savedComment);
};

export const deleteComment = async (req, res) => {
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

  const deletedComment = await Comment.findByIdAndDelete({
    _id: req.params._id,
    user: user._id,
  });
  if (!deletedComment) {
    return res
      .status(403)
      .json({ message: "You can delete only your comment" });
  }
  res.json(200).json({
    message: "Comment deleted",
  });
};
