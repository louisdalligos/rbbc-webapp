import { useRouter } from 'next/router';
import Head from 'next/head';
import { withApollo } from '@services/apollo';
import { useQuery } from '@apollo/react-hooks';
import { PROPERTY_DETAIL } from '@queries/propertyDetailQuery';
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
import PageLoader from '@components/spinners/page-loader';

const PropertyDetail = () => {
  const router = useRouter();
  const slug = router.query.slug;
  const { loading, error, data } = useQuery(PROPERTY_DETAIL, {
    variables: { slug },
  });
  if (error) return <p>There was an error processing your request</p>;
  if (loading) return <PageLoader />;

  console.log(data.listings[0], 'data query result');

  const {
    title,
    address,
    tags,
    startingPrice,
    gallery,
    propertyDescription,
    listing_types,
    floorPlansAndPricing,
    bed,
    bath,
    area,
    longitude,
    latitude,
    yearBuilt,
  } = data.listings[0];

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
        <section className="container mx-auto h-full">
          <PropertyHeading
            title={title}
            address={address}
            price={startingPrice}
            tags={tags}
            propertyType={listing_types}
          />
          <div className="flex mt-4">
            <div className="h-auto content-column">
              <PropertyGallery gallery={gallery} />
              <PropertyDetails
                description={propertyDescription}
                features={floorPlansAndPricing}
                bed={bed}
                bath={bath}
                area={area}
                latitude={latitude}
                longitude={longitude}
                year={yearBuilt}
                address={address}
              />
            </div>

            <div className="sidebar hidden lg:block">
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

        <PropertContactSection propertyTitle={title} />
        <style jsx>{`
          @media (min-width: 1024px) {
            .content-column {
              width: 80%;
              margin-right: 30px;
            }
          }

          .sidebar {
            width: 340px;
          }
        `}</style>
      </PageLayout>
    </>
  );
};

export default withApollo({ ssr: true })(PropertyDetail);
