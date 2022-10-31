import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Form from "../Forms/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <Container minWidth='6xl' mt={2}>
      <Flex justifyContent='space-between' w='100%'>
        <Box w='70%'>
          <Posts />
        </Box>
        <Box w='30%' p='6' m='5' boxShadow='lg' rounded='md' bg='white'>
          <Form />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
