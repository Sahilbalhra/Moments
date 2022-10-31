import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    // creator: {
    //   type: String,
    // required: true,
    // },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    selectedFile: { type: String, required: true },
    tags: {
      type: [String],
      default: [],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    comments: {
      type: [String],
      default: [],
      required: false,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      required: false,
    },
  },
  { timestamps: true }
);

export const postsModel = mongoose.model("posts", postSchema);
