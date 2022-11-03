import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, AllPosts } from "../../models/posts.model";

export const apiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, any>({
      query: (post) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<Post, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<Post, any>({
      query: (body) => ({
        url: `/posts/${body.id}`,
        method: "PATCH",
        body: body.formData,
      }),
      invalidatesTags: ["Posts"],
    }),
    getPost: builder.query<Post, string>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getPosts: builder.query<AllPosts, void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
  useCreatePostMutation,
  useDeletePostMutation,
} = apiSlice;
