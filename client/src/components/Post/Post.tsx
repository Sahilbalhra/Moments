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
import { useDeletePostMutation } from "../../features/api/apiSlice";

type postProps = {
  id: string;
  title: string;
  message: string;
  image: string;
  tags: [string];
  likes: [string];
  setCurrentId: (active: string | null) => void;
};

const Post: React.FC<postProps> = ({
  title,
  message,
  image,
  tags,
  likes,
  id,
  setCurrentId,
}) => {
  const navigate = useNavigate();

  const handleEditButton = () => {
    setCurrentId(id);
  };

  const [deletePost] = useDeletePostMutation();

  const handleDeletePost = () => {
    deletePost(id);
  };

  return (
    <Box
      minW='2xs'
      maxW='2xs'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      position='relative'
      m={1}
    >
      <Image
        src={image}
        alt={title}
        onClick={() => navigate(`/post/${id}`)}
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
        onClick={handleEditButton}
      />
      <Box p='2'>
        <Box display='flex' alignItems='baseline'>
          {tags.map((tag) => (
            <Text key={tag} fontSize='sm' color='gray.500'>
              # {tag}&nbsp;{" "}
            </Text>
          ))}
        </Box>
        <Box mt='1' fontWeight='bold' as='h4' lineHeight='tight' noOfLines={1}>
          {title}
        </Box>
        <Text fontSize='sm' color='gray.600' mt='2' mb='2'>
          {message}
        </Text>
        <Flex>
          <Button as='span' ml='2' color='gray.600' fontSize='sm'>
            <BsFillHandThumbsUpFill />
            &nbsp;
            {likes.length > 1 ? "Likes" : "Like"}
          </Button>
          <Spacer />
          <Button
            as='span'
            ml='2'
            colorScheme='red'
            fontSize='sm'
            onClick={handleDeletePost}
          >
            <BsFillTrashFill />
            &nbsp; Delete
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Post;
