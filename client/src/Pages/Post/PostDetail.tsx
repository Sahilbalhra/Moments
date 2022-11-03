import React, { useState } from "react";
import {
  Avatar,
  Center,
  Stack,
  Box,
  Button,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Divider,
  Flex,
  VStack,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  useCommentPostMutation,
  useGetPostQuery,
} from "../../features/api/apiSlice";

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const [comment, setComment] = useState<string>("");
  const { data } = useGetPostQuery(id ? id : "");
  const user = JSON.parse(localStorage.getItem("user") as any);
  const [addComment] = useCommentPostMutation();

  const handleAddComment = () => {
    const body = {
      id,
      comment,
    };
    addComment(body);
  };

  return (
    <Center m={4}>
      <Stack spacing={8} direction='row'>
        <Box p={5} shadow='md' borderWidth='1px'>
          <Flex m={2} alignContent='center'>
            <Avatar size='lg' name={user.name} src={user.profilePicture} />
            <VStack ml={4}>
              <Text as='b' color='gray.600' align='start'>
                {user.name}
              </Text>
              <HStack alignContent='center'>
                <Text color='gray.500'>{data?.data.updatedAt}</Text>
                <Text color='gray.500'>22 min ago</Text>
              </HStack>
            </VStack>
          </Flex>
          <Divider />
          <Heading size='3xl' mt={2} color='gray.600'>
            {data?.data.title}
          </Heading>
          <Box display='flex' alignItems='baseline'>
            {data?.data.tags.map((tag) => (
              <Text key={tag} variant='h6' color='gray.500'>
                # {tag}&nbsp;{" "}
              </Text>
            ))}
          </Box>
          <Divider />
          <SimpleGrid columns={2} spacing={10}>
            <VStack>
              <Text mt={2} p={2} color='gray.600'>
                {data?.data.message}
              </Text>
              <Divider />
              <InputGroup size='md'>
                <Input
                  pr='4.5rem'
                  type='text'
                  placeholder='Enter Comment Here'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleAddComment}>
                    Add
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Box
                p={2}
                shadow='md'
                borderWidth='1px'
                height={150}
                w='full'
                overflowY="scroll"
                overflowX="hidden"
              >
                {data?.data.comments && data?.data.comments.length > 0 ? (
                  data?.data.comments.map((comment) => (
                    <Text
                      bg='gray.100'
                      m={1}
                      p={2}
                      rounded='md'
                      w='full'
                      key={comment}
                    >
                      {comment}
                    </Text>
                  ))
                ) : (
                  <Text bg='gray.100' p={2} rounded='md' w='full'>
                    No Comment
                  </Text>
                )}
              </Box>
            </VStack>
            <Box>
              <Image
                src={data?.data.selectedFile}
                alt={`${data?.data.title} Image`}
                width='full'
                height='3xs'
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </Center>
  );
};

export default PostDetail;
