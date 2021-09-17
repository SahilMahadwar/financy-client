import React from 'react';
import { VStack, useColorModeValue } from '@chakra-ui/react';
import SideBarButton from '@/components/PageShell/Buttons/SideBarButton';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  InvoiceIcon,
  ClientsIcon,
  SettingsIcon,
  HelpIcon,
  EstimatesIcon,
} from '@/components/UI/Icons';

export default function SidebarNav() {
  const router = useRouter();
  const Bg = useColorModeValue('gray.50', 'gray.800');
  const BorderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <>
      <VStack spacing={2}>
        <SideBarButton
          onClick={() => router.push('/home')}
          isActive={router.pathname.startsWith('/home') ? true : false}
          icon={<HomeIcon />}
        >
          Home
        </SideBarButton>
        <SideBarButton
          onClick={() => router.push('/clients')}
          isActive={router.pathname.startsWith('/clients') ? true : false}
          icon={<ClientsIcon />}
        >
          Clients
        </SideBarButton>
        <SideBarButton
          onClick={() => router.push('/invoice')}
          isActive={router.pathname.startsWith('/invoice') ? true : false}
          icon={<InvoiceIcon />}
        >
          Invoices
        </SideBarButton>
        <SideBarButton
          onClick={() => router.push('/estimates')}
          isActive={router.pathname.startsWith('/estimates') ? true : false}
          icon={<EstimatesIcon />}
        >
          Estimates
        </SideBarButton>
      </VStack>

      <VStack
        borderTop="1px"
        borderTopColor={BorderColor}
        mt={8}
        pt={5}
        spacing={2}
      >
        <SideBarButton
          onClick={() => router.push('/settings')}
          isActive={router.pathname.startsWith('/settings') ? true : false}
          icon={<SettingsIcon />}
        >
          Settings
        </SideBarButton>
        <SideBarButton icon={<HelpIcon />}>Help Center</SideBarButton>
      </VStack>
    </>
  );
}
