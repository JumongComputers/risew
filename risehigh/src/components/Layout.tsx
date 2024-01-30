import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  customClass?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, customClass }) => {
  return (
    <div className={customClass}>
      <Head>
        <title>Rise High Hotel</title>
        <meta name="description" content="Hotel description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
