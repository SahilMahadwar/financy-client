import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

export default function PageShell({ children }) {
  return (
    <Flex w="100%">
      <Box>
        <Sidebar />
      </Box>
      <Box w="100%">
        <Navbar />
        <Box mt={10} py={5} bg="gray.700" mx="auto" px="20px" maxW="1060px">
          <Flex
            align="center"
            justify="center"
            border="2px"
            borderStyle="dashed"
            height="500px"
          >
            {children}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
