import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { withApollo } from '@services/apollo';
import { useQuery } from '@apollo/react-hooks';
import { PROPERTY_DETAIL } from '@queries/propertyDetailQuery';
import { useProperty } from '@context/property/Property';
import { metaDescription } from '@utils/constants';

// Components
import PageLayout from '@components/layouts/page-layout';
import PropertyGallery from '@components/property-post/property-gallery';
import PropertyDetails from '@components/property-post/property-details';
import InquiryFormSidebar from '@components/forms/inquiry-form-sidebar';
import PropertContactSection from '@components/property-post/property-contact-section';
import PropertyHeading from '@components/property-post/property-heading';
import ListingAuthor from '@components/widgets/listing-author';
import Disclaimer from '@components/widgets/disclaimer';

const PropertyDetail = () => {
  const { setPropertyData, title } = useProperty();
  const router = useRouter();
  const slug = router.query.slug;
  const { loading, error, data } = useQuery(PROPERTY_DETAIL, {
    variables: { slug },
  });
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  useEffect(() => {
    if (!loading) {
      console.log(data, 'data fetched');
      setPropertyData(data);
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          {title} - RBBC Realty | Real state, Condominiums for sale, House for
          sale, RFO, Rent to own
        </title>
        <meta name="description" content={metaDescription}></meta>

        <meta property="og:title" content={title} key="ogtitle" />
        <meta
          property="og:description"
          content={metaDescription}
          key="ogdesc"
        />
      </Head>
      <PageLayout>
        <section className="container mx-auto h-full -mt-5">
          <PropertyHeading />
          <div className="flex flex-wrap mt-4">
            <div className="w-full h-auto lg:w-9/12 lg:pr-8">
              <PropertyGallery />
              <PropertyDetails />
            </div>

            <div className="hidden lg:block w-full sm:w-full lg:w-3/12">
              <div className="px-3 py-2 bg-gray-100 rounded border h-auto">
                <h4 className="text-lg text-center mb-2">
                  More about this property
                </h4>
                <InquiryFormSidebar />
              </div>

              <ListingAuthor />
              <Disclaimer />
            </div>
          </div>
        </section>

        <PropertContactSection />
      </PageLayout>
    </>
  );
};

export default withApollo({ ssr: true })(PropertyDetail);
