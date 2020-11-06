import React from 'react';

import IndexNavbar from '@components/navbars/index-navbar';
import Footer from '@components/footers/default-footer';

const MainLayout = ({ children }) => {
  const nav = [
    { _id: '5f79107115f8520984eaa5fd', name: 'condominium' },
    { _id: '5f79109015f8520984eaa5fe', name: 'townhouse' },
    { _id: '5fa4436e77041f2d106240b8', name: 'house and lot' },
  ];

  return (
    <>
      <IndexNavbar items={nav} />
      <main className="page-body">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
