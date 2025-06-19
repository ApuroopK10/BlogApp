import User from "../models/user.model.js";

export const getUserSavedPosts = async (req, res) => {
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

  res.status(200).json({ posts: user.savedPosts });
};

export const savePost = async (req, res) => {
  const clerkUserId = req.auth.userId; // checking if user authenticated
  const postId = req.body.postId;
  if (!clerkUserId) {
    return res.status(401).json("Not Authenticated");
  }

  const user = await User.findOne({
    clerkUserId,
  });
  // If user not found
  if (!user) {
    return res.status(404).json("User not found");
  }

  const savedPost = user.savedPosts.some((post) => post === postId);
  if (!savedPost) {
    await User.findByIdAndUpdate(user._id, {
      $push: { savedPosts: postId },
    });
  } else {
    await User.findByIdAndUpdate(user._id, {
      $pull: { savedPosts: postId },
    });
  }

  res.status(200).json(!savedPost ? "Post saved" : "Post unsaved");
};
