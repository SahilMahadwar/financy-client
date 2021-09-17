import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import PageShell from '@/components/PageShell/PageShell';
import DarkmodeToggle from '@/components/UI/DarkmodeToggle';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <PageShell>
      <Layout>
        <Heading fontSize="30px">Billing Page</Heading>
      </Layout>
    </PageShell>
  );
}
