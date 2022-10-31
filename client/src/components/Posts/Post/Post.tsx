import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillTrashFill, BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  const obj = {
    selectedFile: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    title: "Modern home",
    message: "Modern home in city center in the heart of historic Los Angeles",
    tags: ["Apple ", "Fruit", "Home"],
    likes: ["asbda", "askjas"],
    creator: "Sahil",
  };

  return (
    <Box
      maxW='2xs'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      position='relative'
      m={1}
    >
      <Image
        src={obj.selectedFile}
        alt={obj.imageAlt}
        onClick={() => navigate("/post")}
        cursor='pointer'
        w='full'
        h={150}
      />
      <IconButton
        aria-label='edit'
        variant='ghost'
        colorScheme='blackAlpha'
        isRound
        size='md'
        icon={<BsThreeDots color='white' />}
        position='absolute'
        top='1'
        right='1'
      />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          {obj.tags.map((tag) => (
            <Text key={tag} fontSize='sm' color='gray.500'>
              # {tag}&nbsp;{" "}
            </Text>
          ))}
        </Box>
        <Box mt='1' fontWeight='bold' as='h4' lineHeight='tight' noOfLines={1}>
          {obj.title}
        </Box>
        <Text  fontSize='sm' color='gray.600' mt='2' mb='2'>
          {obj.message}
        </Text>
        <Flex>
          <Button as='span' ml='2' color='gray.600' fontSize='sm'>
            <BsFillHandThumbsUpFill />
            &nbsp;
            {obj.likes.length > 1 ? "Likes" : "Like"}
          </Button>
          <Spacer />
          <Button as='span' ml='2' colorScheme='red' fontSize='sm'>
            <BsFillTrashFill />
            &nbsp; Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Post;
