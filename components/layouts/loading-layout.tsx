import React from 'react';
import IndexNavbar from '@components/navbars/index-navbar';
import Footer from '@components/footers/default-footer';

export default function LoadingLayout() {
  return (
    <>
      <IndexNavbar />
      <main className="page-body h-screen">
        <div className="container mx-auto h-full mt-5">
          <div className="h-full block top-0 left-0 bg-white opacity-75 z-50">
            <span className="spinner text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0">
              <i className="fas fa-circle-notch fa-spin fa-3x"></i>
            </span>
          </div>
        </div>
      </main>
      <style jsx>{`
        .spinner {
          top: 50%;
        }
      `}</style>
      <Footer />
    </>
  );
}
