import React from "react";
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
import { useGetPostQuery } from "../../features/api/apiSlice";

const PostDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetPostQuery(id ? id : "");
  console.log(data?.data);
  return (
    <Center m={4}>
      <Stack spacing={8} direction='row'>
        <Box p={5} shadow='md' borderWidth='1px'>
          <Flex m={2} alignContent='center'>
            <Avatar
              size='lg'
              name='Prosper Otemuyiwa'
              src='https://bit.ly/prosper-baba'
            />
            <VStack ml={4}>
              <Text as='b' color='gray.600' align='start'>
                User Name
              </Text>
              <HStack alignContent='center'>
                <Text color='gray.500'>Dec 10,1999</Text>
                <Text color='gray.500'>22 min ago</Text>
              </HStack>
            </VStack>
          </Flex>
          <Divider />
          <Heading size='3xl' mt={2} color='gray.600'>
            {data?.data.title}
          </Heading>
          <Text variant='h6' color='gray.500'>
            {data?.data.tags}
          </Text>
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
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={() => {}}>
                    Add
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Box p={2} shadow='md' borderWidth='1px' w='full'>
                <Text bg='gray.100' p={2} rounded='md' w='full'>
                  {data?.data.comments}
                </Text>
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
