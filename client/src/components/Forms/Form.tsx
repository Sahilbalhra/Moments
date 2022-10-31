/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Box, Input, Text, Textarea } from "@chakra-ui/react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postActions";

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClear = () => {
    setFormData({
      title: "",
      message: "",
      tags: [""],
      selectedFile: "",
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log("Form Date:", formData);
    dispatch(createPost(formData));

    handleClear();
  };
  return (
    <Box as='form' onSubmit={handleSubmit} textAlign='center'>
      <Text mb='4' fontSize='xl' as='b'>
        Create Your Moment
      </Text>
      <Input
        type='text'
        name='title'
        placeholder='Title'
        value={formData.title}
        onChange={handleChange}
        mb={2}
        isRequired
      />
      <Textarea
        name='message'
        aria-multiline
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        mb={2}
        isRequired
      />
      <Input
        type='text'
        name='tags'
        placeholder='Tags'
        value={formData.tags}
        onChange={(e) =>
          setFormData({ ...formData, tags: e.target.value.split(" ") })
        }
        mb={2}
        isRequired
      />
      <FileBase
        type='file'
        multiple={false}
        onDone={({ base64 }: any) =>
          setFormData({ ...formData, selectedFile: base64 })
        }
      />
      <Button w='full' mt={2} mb={2} colorScheme='pink' type='submit'>
        Submit
      </Button>
      <Button w='full' colorScheme='purple' onClick={handleClear}>
        Clear
      </Button>
    </Box>
  );
};

export default Form;
