import Head from 'next/head';
import PageLayout from "@components/tailwind/layouts/page-layout"
import Image from 'next/image'

export default function PrivacyPolicy() {
  return (
    <>
        <Head>
            <title>
            About Us - RBBC Realty | Real state, Condominiums for sale, House for sale,
            RFO, Rent to own
            </title>
        </Head>
        <PageLayout>
            <section className="container mx-auto px-4 h-full">
                <h2 className="text-2xl mb-8">Contact Rachel to organise a viewing</h2>
                <p className="leading-loose mb-20">Rachel Guevarra is one of the top real state brokers of SMDC. A licensed doctor by profession, she has extensive years of experience in Philippines' real estate market and sold estates of total value of P120,000,000.</p>

                <div className="flex flex-wrap justify-center">
                    <Image
                        src="/images/rachel-guevarra.jpg"
                        alt="Rachel Guevarra"
                        width={300}
                        height={451}
                        className="rounded-lg shadow-xl"
                    />

                    <div className="lg:w-3/5 mx-8">
                        <ul className="list-unstyled contact-info-list my-10">
                            <li className="flex items-center my-8 leading-7"><i className="fas fa-user-md text-xl mx-4 my-4 text-gray-500"></i><span>Rachel Guevarra, LIC Real Estate Broker, Doctor of Dental Medicine, R.N.</span></li>
                            <li className="flex items-center my-8 leading-7"><i className="fas fa-map-marker-alt text-xl mx-4 my-4 text-gray-500"></i><span>23 B Zamboanga St. Bgy Nayong Kanluran West Avenue, Quezon City 1104</span></li>
                            <li className="flex items-center my-8 leading-7"><i className="fas fa-sms text-xl mx-4 my-4 text-gray-500"></i><span>09778340256</span></li>
                            <li className="flex items-center my-8 leading-7"><i className="fas fa-at text-xl mx-4 my-4 text-gray-500"></i><span>ragee1fil@yahoo.com</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </PageLayout>
    </>
  );
};

