import React from 'react';

import IndexNavbar from '@components/navbars/index-navbar';
import Footer from '@components/footers/default-footer';

const PageLayout = ({ children }) => {
  const nav = [
    { _id: '5f79107115f8520984eaa5fd', name: 'condominium' },
    { _id: '5f79109015f8520984eaa5fe', name: 'townhouse' },
  ];

  return (
    <>
      <IndexNavbar items={nav} />
      <main className="page-body with-container px-4 xl:px-0">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
