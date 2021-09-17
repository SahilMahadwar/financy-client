import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      <Box mt={10} py={5} mx="auto" px="20px" maxW="1060px">
        {children}
      </Box>
    </Box>
  );
};

Layout.defaultProps = {
  title: 'Financy',
  description: 'Accounting software',
  keywords: 'Accounting',
};

export default Layout;
