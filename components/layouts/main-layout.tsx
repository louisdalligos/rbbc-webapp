import React from 'react';
import IndexNavbar from '@components/navbars/index-navbar';
import Footer from '@components/footers/default-footer';

export default function MainLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <main className="page-body">{children}</main>
      <Footer />
    </>
  );
}
