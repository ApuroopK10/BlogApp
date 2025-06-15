import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
    },
    savedPosts: {
      type: [String], // array of strings
      default: [],
    },
  },
  { timestamps: true } // adds timestamp of created and lastUpdated
);

export default mongoose.model("User", userSchema);
