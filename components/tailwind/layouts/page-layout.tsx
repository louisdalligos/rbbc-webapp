import React from 'react';
import IndexNavbar from '@components/tailwind/navbars/index-navbar';
import Footer from '@components/tailwind/footers/default-footer';

export default function PageLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <main className="page-body py-32">{children}</main>
      <Footer />
    </>
  );
}
