import React from "react"
import Link from "next/link"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-1 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                <img src="/images/rbbc-logo.svg" width="145" alt="RBBC Realty" />
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link href="/townhouse">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Townhouse
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/condominium">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Condominium
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/house-and-lot">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    House &amp; Lot
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <a
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold flex justify-content align-center ml-2"
                  href="tel:+63 922 8882298"
                >
                  <i className="fas fa-phone-square-alt text-green-500 text-2xl mr-2"></i><span>+63 977 8340256</span>
                </a>
              </li>
              <li className="flex items-center">
                <Link href="/login">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Login</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/signup">
                  <a
                    className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    <span className="inline-block ml-2">Sign up</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
