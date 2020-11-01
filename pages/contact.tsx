import Head from 'next/head';
import PageLayout from '@components/tailwind/layouts/page-layout';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>
          Contact Us - RBBC Realty | Real state, Condominiums for sale, House
          for sale, RFO, Rent to own
        </title>
      </Head>
      <PageLayout>
        <section className="container mx-auto h-full">
          <h2 className="text-3xl mb-8 font-semibold">Contact Us</h2>
          <div className="grid grid-flow-row sm:grid-flow-row md:grid-flow-col-dense lg:grid-flow-row-dense xl:grid-flow-col">
            <div className="my-6">
              <h3 className="font-semibold text-xl mb-4">Quezon City</h3>
              <p>
                <span className="font-semibold block mb-2">Address</span>
                <span className="mb-4 block">
                  23 B Zamboanga St. Bgy Nayong Kanluran West Avenue, <br />
                  Quezon City 1104
                </span>
                <span className="font-semibold block mb-2">Phone</span>
                <span>09778340256</span>
              </p>
            </div>
            <div className="my-6">
              <h3 className="font-semibold text-xl mb-4">Pasay City</h3>
              <p>
                <span className="font-semibold block mb-2">Address</span>
                <span className="mb-4 block">
                  1300 Seaside Blvd, <br />
                  Pasay, Metro Manila
                </span>
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
