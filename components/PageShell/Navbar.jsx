import React from 'react';
import { Flex, Box, Button, useColorModeValue } from '@chakra-ui/react';
import UserMenu from './UserMenu';

export default function SideBarButton() {
  const BorderColor = useColorModeValue('gray.200', 'gray.700');
  return (
    <Flex
      justify="flex-end"
      px={4}
      align="center"
      borderBottom="1px"
      borderBottomColor={BorderColor}
      h={16}
    >
      <UserMenu />
    </Flex>
  );
}
