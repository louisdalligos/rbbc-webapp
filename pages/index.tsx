import Head from 'next/head';
import MainLayout from "@components/tailwind/layouts/main-layout"

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Home - RBBC Realty | Real state, Condominiums for sale, House for sale,
          RFO, Rent to own
        </title>
      </Head>
      <MainLayout>
        <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
          <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-700">
                  This is a sample hero section
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Nam venenatis lacus massa, vitae porta urna sagittis non. Nulla
                  nec porta libero. Nunc ultrices cursus fringilla. Sed id justo
                  ullamcorper, aliquam turpis at, dictum lacus. Vivamus faucibus
                  massa ac interdum euismod. Morbi sit amet libero eros. Nullam
                  sit amet posuere dolor.
                </p>
                <div className="mt-12">
                  <a
                    href="#"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
            src="https://image.freepik.com/free-vector/group-people-working-together_52683-28615.jpg"
            alt="hero"
          />
        </section>
      </MainLayout>
    </>
  );
};
export default Index;
