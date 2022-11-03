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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../../features/user/userSlice";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  // const user = useSelector(selectCurrentUser);
  const user = JSON.parse(localStorage.getItem("user") as any);

  return (
    <Flex
      h='70px'
      w='full'
      bg='gray.50'
      pt={2}
      pb={2}
      pl={8}
      pr={8}
      alignItems='center'
    >
      <Text fontSize='xl' as='b' cursor='pointer' onClick={() => navigate("/")}>
        Moments
      </Text>
      <Spacer />
      {user ? (
        <Menu>
          <MenuButton>
            <Avatar cursor='pointer' src={user.profilePicture} />
          </MenuButton>
          <MenuList>
            <MenuItem minH='48px'>
              <Avatar cursor='pointer' src={user.profilePicture} />
              <span>{user.name}</span>
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
