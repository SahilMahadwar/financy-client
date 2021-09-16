import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import PageShell from '@/components/PageShell/PageShell';
import DarkmodeToggle from '@/components/UI/DarkmodeToggle';

export default function Home() {
  return (
    <PageShell>
      <Heading>Client</Heading>
      <DarkmodeToggle />
      <Button colorScheme="blue">Suppp</Button>
    </PageShell>
  );
}
