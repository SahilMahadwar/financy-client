import React, { useEffect, useContext } from 'react';
import { Flex, Box, Spinner, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AuthContext from '@/contexts/AuthContext';

export default function Loader() {
  const SpinnerColor = useColorModeValue('#718096', '#3366FF');
  const router = useRouter();

  const { checkUserLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <Flex justify="center" h="100vh" align="center">
      <Flex flexDir="column" justify="center" align="center">
        <Spinner size="xl" color={SpinnerColor} />
        <Text mt="20px">Authenticating</Text>
      </Flex>
    </Flex>
  );
}
