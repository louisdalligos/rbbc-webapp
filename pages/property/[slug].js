import Head from 'next/head';
import PageLayout from '@components/tailwind/layouts/page-layout';
import PropertyGallery from '@components/tailwind/property-gallery';
import PropertyDetails from '@components/tailwind/property-details';
import InquiryFormSidebar from '@components/tailwind/forms/inquiry-form-sidebar';
import PropertContactSection from '@components/tailwind/property-contact-section';

export default function PropertyDetail() {
  const propertyTitle = '2637 22nd St';

  return (
    <>
      <Head>
        <title>
          Property - RBBC Realty | Real state, Condominiums for sale, House for
          sale, RFO, Rent to own
        </title>
      </Head>
      <PageLayout>
        <section className="container mx-auto px-8 h-full">
          <div className="flex flex-wrap">
            <div className="w-full h-auto lg:w-9/12 pr-8">
              <PropertyGallery />

              <div className="my-10">
                <PropertyDetails />
              </div>
            </div>

            <div className="hidden lg:block w-full sm:w-full lg:w-3/12">
              <div className="px-3 py-2 bg-gray-100 rounded border h-auto">
                <h4 className="text-lg text-center mb-2">
                  More about this property
                </h4>
                <InquiryFormSidebar />
              </div>
            </div>
          </div>
        </section>

        <PropertContactSection propertyTitle={propertyTitle} />
      </PageLayout>
    </>
  );
}
