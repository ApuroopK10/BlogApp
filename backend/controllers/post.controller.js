import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

export const getPosts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 2;

  const query = {};

  const cat = req.query.cat;
  const author = req.query.author;
  const searchQuery = req.query.searchQuery;
  const sortQuery = req.query.sortQuery;

  if (cat) {
    query.category = cat;
  }

  if (searchQuery) {
    query.title = { $regex: searchQuery, $options: "i" };
  }

  if (author) {
    const user = await User.findOne({ username: author }).select("_id");

    if (!user) {
      return res.status(404).json("No post found");
    }
    query.user = user._id;
  }

  let sortObj = { createdAt: -1 };

  if (sortQuery) {
    switch (sortQuery) {
      case "newest":
        sortObj = { createdAt: -1 };
        break;

      case "oldest":
        sortObj = { createdAt: 1 };
        break;

      case "popular":
        sortObj = { visit: -1 };
        break;

      case "trending":
        sortObj = { visit: -1 };
        query.createdAt = {
          $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
        };
        break;

      default:
        break;
    }
  }

  const posts = await Post.find(query)
    .populate("user", "username")
    .sort(sortObj)
    .limit(limit)
    .skip((page - 1) * limit);
  const totalPosts = await Post.countDocuments();
  const hasMore = totalPosts - page * limit > 0;
  res.status(200).send({ posts, hasMore });
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug }).populate(
    "user",
    "username img"
  );
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

  const role = req.auth.sessionClaims?.metadata?.role || "user";

  if (role === "admin") {
    await Post.findByIdAndDelete({
      _id: req.params.id,
    });
    return res.status(200).json({ status: "Post deleted" });
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
