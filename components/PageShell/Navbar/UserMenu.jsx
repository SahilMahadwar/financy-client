import React, { useRef, useState, useContext } from 'react';
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuOptionGroup,
  Flex,
  Text,
  Switch,
  MenuDivider,
  MenuItem,
  IconButton,
  useColorMode,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  MenuGroup,
} from '@chakra-ui/react';
import AuthContext from '@/contexts/AuthContext';
import { DropdownArrowIcon } from '@/components/UI/Icons';

export default function UserMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoading(true);
    logout();
  };

  return (
    <>
      <Menu placement="bottom-end">
        <MenuButton
          as={IconButton}
          rightIcon={<DropdownArrowIcon />}
          aria-label="Options"
          variant="link"
          icon={
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          }
          color="#718096"
          _active={{
            color: '#fff',
          }}
          _hover={{
            color: '#fff',
          }}
          _focus={{
            boxShadow: 'none',
          }}
        />
        <MenuList boxShadow="none" minWidth="180px" fontSize="14px">
          <MenuOptionGroup id="newtvab" title="Theme" type="checkbox">
            <Flex mb="15px" px="16px" justify="space-between">
              <Text fontSize="14px" fontWeight="normal">
                Darkmode
              </Text>
              <Switch
                isChecked={colorMode === 'light' ? false : true}
                onChange={toggleColorMode}
              />
            </Flex>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuItem id="newtab">New Tab</MenuItem>
          <MenuItem id="newtasdab">New Window</MenuItem>
          <MenuItem id="newtaasdbb" onClick={() => setIsOpen(true)}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader mb="-15px" fontSize="lg" fontWeight="bold">
              Log out
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? you want to log out</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                colorScheme="red"
                onClick={handleLogout}
                ml={3}
              >
                Log out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

{
  /* <MenuList boxShadow="none" minWidth="180px" fontSize="14px">
          <MenuOptionGroup id="newtvab" title="Theme" type="checkbox">
            <Flex mb="15px" px="16px" justify="space-between">
              <Text fontSize="14px" fontWeight="normal">
                Darkmode
              </Text>
              <Switch
                isChecked={colorMode === 'light' ? false : true}
                onChange={toggleColorMode}
              />
            </Flex>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuItem id="newtab">New Tab</MenuItem>
          <MenuItem id="newtasdab">New Window</MenuItem>
          <MenuItem id="newtaasdbb" onClick={() => setIsOpen(true)}>
            Logout
          </MenuItem>
        </MenuList> */
}
