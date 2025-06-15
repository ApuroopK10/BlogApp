import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId, //refer userSchema here
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId, //refer postSchema here
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true } // adds timestamp of created and lastUpdated
);

export default mongoose.model("Comment", commentSchema);
