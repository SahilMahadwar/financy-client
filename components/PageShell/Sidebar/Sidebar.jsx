import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Button,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import SideBarButton from '../Buttons/SideBarButton';
import { useRouter } from 'next/router';
import Logo from '../../UI/Logo';
import {
  HomeIcon,
  InvoiceIcon,
  ClientsIcon,
  SettingsIcon,
  HelpIcon,
  EstimatesIcon,
} from '@/components/UI/Icons';
import SidebarNav from './SidebarNav';
import CreateInvoiceDrawer from '@/components/CreateInvoice/CreateInvoiceDrawer';

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const Bg = useColorModeValue('gray.50', 'gray.800');
  const BorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex
      flexDir="column"
      px={4}
      position="sticky"
      top="0"
      w={64}
      h="100vh"
      bg={Bg}
      borderRight="1px"
      borderRightColor={BorderColor}
    >
      <Box mt={5} mb={6}>
        <Logo />
      </Box>

      <Box mb={6}>
        <Button
          colorScheme="teal"
          borderColor={BorderColor}
          variant="outline"
          size="sm"
          w="100%"
          onClick={() => onOpen()}
        >
          Create New Invoice
        </Button>
        <CreateInvoiceDrawer onClose={onClose} isOpen={isOpen} />
      </Box>

      <SidebarNav />
    </Flex>
  );
}
