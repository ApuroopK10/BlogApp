import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import connectDB from "./lib/connectDB.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();
app.use(clerkMiddleware());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use("/webhooks", webHookRouter);
app.use(express.json());

// allow cross-origin requests
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "something went wrong",
    status: error.status,
    stack: error.stack, // not to be used in prod
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("server is running");
});
