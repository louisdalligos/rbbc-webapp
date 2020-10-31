import React from 'react';
import IndexNavbar from '@components/tailwind/navbars/index-navbar';
import Footer from '@components/tailwind/footers/default-footer';

export default function MainLayout({ children }) {
  return (
    <>
      <IndexNavbar />
      <main className="page-body">{children}</main>
      <Footer />
    </>
  );
}
