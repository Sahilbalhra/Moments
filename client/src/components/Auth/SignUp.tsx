import {
  Box,
  Center,
  Text,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";

import { useGoogleLogin } from "@react-oauth/google";
import { useSignUpUserMutation } from "../../features/api/authSlice";
type formprops = {
  handleForm: (data: boolean) => void;
};
const Signup: React.FC<formprops> = ({ handleForm }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  const [signUpUser, { data, isSuccess, isError, isLoading }] =
    useSignUpUserMutation();

  if (isSuccess) {
    console.log("SignUp successful", data);
  } else if (isError) {
    console.log("Error while signUp", data);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log("Form data:", form);
    signUpUser(form);
    handleClear();
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClear = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    signUpUser({ googleAccessToken: accessToken });
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  return (
    <Box w='full' h='full'>
      <Center>
        <Box
          as='form'
          onSubmit={handleSubmit}
          maxW='500px'
          textAlign='center'
          alignContent='center'
          mt={20}
          boxShadow='lg'
          p='4'
        >
          <Text fontSize='xl' as='b'>
            Create an Account
          </Text>
          <Flex>
            <Input
              type='text'
              name='firstName'
              placeholder='First Name'
              mt={4}
              mb={2}
              mr={2}
              value={form.firstName}
              onChange={handleChange}
              isRequired
            />
            <Input
              type='text'
              name='lastName'
              placeholder='Last Name'
              mt={4}
              mb={2}
              value={form.lastName}
              onChange={handleChange}
              isRequired
            />
          </Flex>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            mt={4}
            mb={2}
            value={form.email}
            onChange={handleChange}
            isRequired
          />
          <InputGroup size='md' mb={2}>
            <Input
              pr='4.5rem'
              type={show ? "text" : "password"}
              name='password'
              placeholder='Enter password'
              value={form.password}
              onChange={handleChange}
            />
            <InputRightElement
              children={show ? <ViewOffIcon /> : <ViewIcon />}
              onClick={handleClick}
              cursor='pointer'
              bg='gray.200'
            />
          </InputGroup>
          <Input
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password'
            mt={4}
            mb={2}
            value={form.confirmPassword}
            onChange={handleChange}
            isRequired
          />
          <Text m={2} color='gray.500'>
            Already have an account ?{" "}
            <Button variant='link' onClick={() => handleForm(true)}>
              {" "}
              Login here
            </Button>
          </Text>
          <Button
            type='submit'
            colorScheme='pink'
            w='full'
            sx={{ mb: 2 }}
            isLoading={isLoading}
          >
            Create Account
          </Button>
          <Button colorScheme='gray' w='full' onClick={() => login()}>
            <FcGoogle size={30} />
            &nbsp; Use Google Account
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Signup;
