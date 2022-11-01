import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Form from "../Forms/Form";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <Container minWidth='6xl' mt={2}>
      <Grid display='flex'>
        <GridItem w='70%'>
          <Posts />
        </GridItem>
        <GridItem w='30%' p='6' m='5' boxShadow='lg' rounded='md' bg='white'>
          <Form />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
