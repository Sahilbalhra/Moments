import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, AllPosts } from "../../models/posts.model";

export const apiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/posts",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token;

    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }

    //   return headers;
    // },
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    createPost: builder.mutation<Post, any>({
      query: (post) => ({
        url: "/",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation<Post, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation<Post, any>({
      query: (body) => ({
        url: `/${body.id}`,
        method: "PATCH",
        body: body.formData,
      }),
      invalidatesTags: ["Posts"],
    }),
    getPost: builder.query<Post, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    getPosts: builder.query<AllPosts, void>({
      query: () => "/",
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
