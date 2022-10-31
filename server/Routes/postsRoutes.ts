import express from "express";
import {
  commentPost,
  createPost,
  deletePost,
  getPost,
  getPosts,
  likePost,
  updatePost,
} from "../Controllers/postController";
const postRoutes = express.Router();

postRoutes.route("/:id/likePost").post(likePost);
postRoutes.route("/:id/commentPost").post(commentPost);
postRoutes.route("/:id").get(getPost).patch(updatePost).delete(deletePost);
postRoutes.route("/").post(createPost).get(getPosts);

export default postRoutes;
