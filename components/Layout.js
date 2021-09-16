import React from 'react';
import Head from 'next/head';
import { Box, Flex } from '@chakra-ui/react';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      {children}
    </Box>
  );
};

Layout.defaultProps = {
  title: 'Financy',
  description: 'Accounting software',
  keywords: 'Accounting',
};

export default Layout;
