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

const PostDetail = () => {
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
            title
          </Heading>
          <Text variant='h6' color='gray.500'>
            #tags
          </Text>
          <Divider />
          <SimpleGrid columns={2} spacing={10}>
            <VStack>
              <Text mt={2} p={2} color='gray.600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quidem laborum sunt dicta, vel unde iure doloremque velit! Modi
                vitae doloribus corrupti molestiae fugit esse perferendis ipsam
                odit. Repellendus at, vitae corrupti distinctio fuga rerum
                placeat rem numquam exercitationem totam
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
                  Highlighted
                </Text>
              </Box>
            </VStack>
            <Box>
              <Image
                src='https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                alt='image'
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </Center>
  );
};

export default PostDetail;
