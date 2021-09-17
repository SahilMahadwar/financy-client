import React from 'react';
import PageShell from '@/components/PageShell/PageShell';
import Layout from '@/components/Layout';
import { Button, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <Layout title="Account Settings">
      <Heading fontSize="30px">This is Settings Page</Heading>
    </Layout>
  );
}
