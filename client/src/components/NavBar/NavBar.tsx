import React from "react";
import {
  Flex,
  Spacer,
  Text,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const user = false;
  return (
    <Flex h='70px' w='full' bg='gray.50' p={2} alignItems='center'>
      <Text fontSize='xl' as='b' cursor='pointer' onClick={() => navigate("/")}>
        Moments
      </Text>
      <Spacer />
      {user ? (
        <Menu>
          <MenuButton>
            <Avatar cursor='pointer' />
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Image
                boxSize='2rem'
                borderRadius='full'
                src='https://placekitten.com/100/100'
                alt='Fluffybuns the destroyer'
                mr='12px'
              />
              <span>User Name</span>
            </MenuItem>
            <MenuItem>LogOut</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button onClick={() => navigate("/auth")}>Log In</Button>
      )}
    </Flex>
  );
};

export default NavBar;
