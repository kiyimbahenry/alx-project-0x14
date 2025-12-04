import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

// Use dynamic import or direct path
const Layout = dynamic(() => import('../components/layout/Layout'), { 
  ssr: false 
});

// OR use direct import
// import Layout from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
