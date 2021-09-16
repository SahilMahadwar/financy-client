import React from 'react';
import { useColorModeValue, Text, Flex } from '@chakra-ui/react';
import { LogoIcon } from '@/components/UI/Icons';

export default function Logo() {
  const Bg = useColorModeValue('#fff', '#222B45');
  const LogoColor = useColorModeValue('#0095FF', '#3366FF');
  const Color = useColorModeValue('#1A202C', '#EDF1F7');

  return (
    <Flex align="center" justify="start" w="180px">
      <Flex align="center">
        <LogoIcon color={LogoColor} />
        <Text
          userSelect="none"
          ml="4px"
          fontSize="20px"
          fontWeight="bold"
          color={Color}
        >
          financy
        </Text>
      </Flex>
    </Flex>
  );
}
