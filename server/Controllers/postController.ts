import { Request, Response } from "express";
import { postsModel } from "../Models/postsModel";

export const createPost = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    // console.log("data is recived");
    const existingPost = await postsModel.findOne({ title: data.title });
    if (existingPost) {
      // console.log("existing Post");
      res.status(404).json({
        message:
          "Cannnot  create a new post . Post with this title already exists",
      });
    }

    const newPost = await postsModel.create(req.body);
    // console.log("new Post:", newPost);
    res.status(201).json({
      message: "Post have been created successfully",
      data: newPost,
    });
  } catch (error) {
    // console.log("catch block", error);
    res.status(404).json({
      message: error,
    });
  }
};

export const commentPost = async (req: Request, res: Response) => {
  try {
    const { comment } = req.body;
    const { id } = req.params;
    const existingPost = await postsModel.findById(id);
    if (!existingPost) {
      res.json({
        message: "can not find post with this id",
      });
    }

    existingPost?.comments.push(comment);

    const updatedPost = await postsModel.findByIdAndUpdate(
      id,
      { comments: existingPost?.comments },
      { new: true }
    );
    res.status(201).json({
      data: updatedPost,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingPost = await postsModel.findById(id);
    if (!existingPost) {
      res.json({
        message: "can not find post with this id",
      });
    }

    const deletedPost = await postsModel.findByIdAndDelete(id, {
      new: true,
    });

    res.status(201).json({
      message: "Post have been deleted",
      data: deletedPost,
    });
  } catch (error) {
    res.status(501).json({
      message: error,
    });
  }
};
export const getPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await postsModel.findById(id);
    if (!post) {
      res.json({
        message: "can not find post with this id",
      });
    }
    res.status(201).json({
      message:"Data with this id",
      data: post,
    });
  } catch (error) {
    res.status(501).json({
      message: error,
    });
  }
};
export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await postsModel.find();
    if (!posts) {
      res.json({
        message: "cnanot find any posts",
      });
    }
    res.status(201).json({
      message: "All posts ",
      data: posts,
    });
  } catch (error) {
    res.status(501).json({
      message: error,
    });
  }
};

export const likePost = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const { id } = req.params;
    const existingPost = await postsModel.findById(id);
    if (!existingPost) {
      res.json({
        message: "can not find post with this id",
      });
    }

    // let Postlikes: any[] = [];

    if (existingPost?.likes.find((id) => id == userId)) {
      existingPost.likes = existingPost?.likes.filter((id) => id != userId);
    } else {
      if (existingPost?.likes) {
        existingPost?.likes.push(String(userId));
      }
    }

    const updatedPost = await postsModel.findByIdAndUpdate(
      id,
      { likes: existingPost?.likes },
      { new: true }
    );
    res.status(201).json({
      data: updatedPost,
    });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingPost = await postsModel.findById(id);
    if (!existingPost) {
      res.json({
        message: "can not find post with this id",
      });
    }

    const updatedPost = await postsModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json({
      data: updatedPost,
    });
  } catch (error) {
    res.status(501).json({
      message: error,
    });
  }
};
