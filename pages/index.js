import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import PageShell from '@/components/PageShell/PageShell';
import DarkmodeToggle from '@/components/UI/DarkmodeToggle';

export default function Home() {
  return (
    <PageShell>
      <Heading fontSize="30px">Children</Heading>
    </PageShell>
  );
}
