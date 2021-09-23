import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  Flex,
  useColorModeValue,
  Heading,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@/components/UI/Icons';

export default function CreateInvoiceDrawer({ onClose, isOpen }) {
  const BorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent bg="gray.800">
        <DrawerHeader p={0}>
          <Flex
            px={10}
            align="center"
            justify="space-between"
            borderBottom="1px"
            borderBottomColor={BorderColor}
            h={16}
          >
            <Heading fontWeight="semibold" fontSize="25px">
              Create Invoice
            </Heading>
            <IconButton
              onClick={onClose}
              aria-label="Search database"
              icon={<CloseIcon />}
            ></IconButton>
          </Flex>
        </DrawerHeader>
        <DrawerBody pt={5} px={10}>
          "You're trapped 😆 , refresh the page to leave or press 'Esc' key"
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

