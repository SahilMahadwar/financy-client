import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

export default function SideBarButton({ children, icon, isActive, onClick }) {
  const Bg = useColorModeValue('blue.500', 'gray.700');
  const Color = useColorModeValue('gray.600', 'gray.400');

  return (
    <Button
      onClick={onClick}
      isActive={isActive}
      leftIcon={icon}
      color={Color}
      variant="ghost"
      px={3}
      h={9}
      iconSpacing={3}
      justifyContent="start"
      alignItems="center"
      fontSize="sm"
      fontWeight="medium"
      w="100%"
      _hover={{ color: 'gray.50', bg: Bg }}
      _active={{
        color: 'gray.50',
        bg: Bg,
      }}
      _focus={{
        boxShadow: 'none',
      }}
    >
      {children}
    </Button>
  );
}
