import { Container, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Form from "../../components/Forms/Form";
import Posts from "../Post/Posts";

const Home = () => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  return (
    <Container minWidth='6xl' mt={2}>
      <Grid display='flex'>
        <GridItem w='70%'>
          <Posts setCurrentId={setCurrentId} />
        </GridItem>
        <GridItem w='30%' p='6' m='5' boxShadow='lg' rounded='md' bg='white'>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Home;
