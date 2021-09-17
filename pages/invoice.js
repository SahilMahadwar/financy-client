import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import PageShell from '@/components/PageShell/PageShell';
import DarkmodeToggle from '@/components/UI/DarkmodeToggle';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout title="Manage Invoices">
      <Heading fontSize="30px">Invoice</Heading>
    </Layout>
  );
}
