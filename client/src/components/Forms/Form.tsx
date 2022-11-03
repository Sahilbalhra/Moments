import React, { useState, useEffect } from "react";
import { Button, Box, Input, Text, Textarea, Center } from "@chakra-ui/react";
import FileBase from "react-file-base64";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetPostQuery,
} from "../../features/api/apiSlice";

type formProps = {
  currentId: string | null;
  setCurrentId: (active: string | null) => void;
};

const Form: React.FC<formProps> = ({ currentId, setCurrentId }) => {
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  });

  const user = JSON.parse(localStorage.getItem("user") as any);

  const { data, isSuccess, isError } = useGetPostQuery(
    currentId ? currentId : ""
  );
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  useEffect(() => {
    if (isSuccess && currentId) {
      // console.log("Data for get Post in Form component:", typeof data?.data);
      if (typeof data?.data === "object") {
        const { title, message, tags, selectedFile } = data?.data;
        setFormData({
          title,
          message,
          tags,
          selectedFile,
        });
      }
    } else if (isError) {
      console.log("Error while getting post data");
    }
  }, [data?.data, isError, isSuccess, currentId]);

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
    console.log("Form Date:", formData);
    if (currentId) {
      updatePost({ id: currentId, formData });
      setCurrentId(null);
    } else {
      createPost(formData);
    }
    handleClear();
  };
  return (
    <Center>
      {user ? (
        <Box as='form' onSubmit={handleSubmit} textAlign='center'>
          <Text mb='4' fontSize='xl' as='b'>
            {currentId ? "Update" : "Create"} Your Memory
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
              setFormData({ ...formData, tags: e.target.value.split(",") })
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
            {currentId ? "Update" : "Save"}
          </Button>
          <Button
            w='full'
            colorScheme='purple'
            onClick={handleClear}
            isDisabled={currentId ? true : false}
          >
            Clear
          </Button>
        </Box>
      ) : (
        <Box textAlign='center'>
          <Text as='b' fontSize='lg' color='gray.500'>
            Please Sign In to create your own memories and like other's
            memories.
          </Text>
        </Box>
      )}
    </Center>
  );
};

export default Form;
