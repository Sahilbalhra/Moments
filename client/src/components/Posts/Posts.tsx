/* eslint-disable @typescript-eslint/no-unused-vars */
import { Center, Spinner, Text, Grid } from "@chakra-ui/react";
import React from "react";
import { useGetPostsQuery } from "../../features/api/apiSlice";
import Post from "./Post/Post";
const Posts = () => {
  const {
    data: postsData,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  // console.log(postsData?.data);
  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>
      ) : isSuccess ? (
          <Grid
            my='8'
            gap={0}
            gridTemplateColumns='repeat(auto-fit)'
          >
            {postsData?.data.map((post) => (
              <Post
                key={post._id}
                image={post.selectedFile}
                title={post.title}
                message={post.message}
                tags={post.tags}
                likes={post.likes}
                id={post._id}
              />
            ))}
          </Grid>
      ) : isError ? (
        <Text>Something wrong happened</Text>
      ) : null}
    </>
  );
};

export default Posts;
