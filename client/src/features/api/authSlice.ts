import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/user",
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
    }),
    signInUser: builder.mutation({
      query: (body) => ({
        url: "/signin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpUserMutation, useSignInUserMutation } = authSlice;
