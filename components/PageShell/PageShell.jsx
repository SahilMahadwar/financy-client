import React, { useContext } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import AuthContext from '@/contexts/AuthContext';
import Sidebar from '@/components/PageShell/Sidebar/Sidebar';
import Navbar from '@/components/PageShell/Navbar/Navbar';
import Loader from '@/components/PageShell/Loader';

export default function PageShell({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return (
      <Flex w="100%">
        <Box>
          <Sidebar />
        </Box>
        <Box w="100%">
          <Navbar />
          {/* <Box h={12} bg="purple.500">
            Alert
          </Box> */}

          <Box mt={10}>{children}</Box>
        </Box>
      </Flex>
    );
  } else {
    return <Loader />;
  }
}

// return (
//   <Flex w="100%">
//     <Box>
//       <Sidebar />
//     </Box>
//     <Box w="100%">
//       <Navbar />
//       {/* <Box h={12} bg="purple.500">
//         Alert
//       </Box> */}

//       <Box mt={10}>{children}</Box>
//     </Box>
//   </Flex>
// );
