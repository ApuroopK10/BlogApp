import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  uploadAuth,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/post", createPost);
router.delete("/:id", deletePost);

export default router;
