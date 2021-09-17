import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return (
    <Layout title="Redericting to Home">
      <div>Redirecting</div>
    </Layout>
  );
}
