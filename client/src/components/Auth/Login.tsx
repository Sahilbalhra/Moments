import {
  Box,
  Center,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";

import { useGoogleLogin } from "@react-oauth/google";

type formprops = {
  handleForm: (data: boolean) => void;
};
const Login: React.FC<formprops> = ({ handleForm }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => setShow(!show);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form data:", form);
    handleClear();
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClear = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;
    console.log("access_token: " + accessToken);
    // dispatch(signinGoogle(accessToken, navigate))
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
            Log In
          </Text>
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
              placeholder='Enter password'
              name='password'
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
          <Button type='submit' colorScheme='pink' w='full' sx={{ mb: 2 }}>
            Log In
          </Button>
          <Text m={2} color='gray.500'>
            Do not Have account ?{" "}
            <Button variant='link' onClick={() => handleForm(false)}>
              {" "}
              Register here
            </Button>
          </Text>
          <Button colorScheme='gray' w='full' onClick={() => login()}>
            <FcGoogle size={30} />
            &nbsp; Sign in with google
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;