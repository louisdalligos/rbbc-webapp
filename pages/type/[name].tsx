import Head from 'next/head';
import { useRouter } from 'next/router';
import { withApollo } from '@services/apollo';
import { useQuery } from '@apollo/react-hooks';
import { PROPERTY_TYPE } from '@queries/propertyTypeListingsQuery';

import PageLayout from '@components/layouts/page-layout';
import HomeListings from '@components/home-listings';
import CategoryBreadcrumbs from '@components/breadcrumbs/category-breadcrumb';
import PageLoader from '@components/spinners/page-loader';

const PropertyType = () => {
  const router = useRouter();
  const id = router.query.ref_key;

  const { loading, error, data } = useQuery(PROPERTY_TYPE, {
    variables: { id },
  });
  if (error) return <p>There was an error processing your request</p>;
  if (loading) return <PageLoader />;

  return (
    <>
      <Head>
        <title>
          All {router.query.name} listings - RBBC Realty | Real state,
          Condominiums for sale, House for sale, RFO, Rent to own
        </title>

        {/*  Google / Search Engine Tags  */}
        <meta key="name" content="RBBC Realty" />
        <meta
          key="description"
          content="Search real estate for sale, discover new homes, shop properties for sale, take virtual tours of houses, condos & apartments on rbbcrealty.com®."
        />
        <meta
          key="image"
          content="http://res.cloudinary.com/dsmxjpcpa/image/upload/v1600436993/rbbc-website_bbfom2.png"
        />

        {/*  Facebook Meta Tags  */}
        <meta property="og:url" content="https://www.rbbcrealty.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="RBBC Realty" />
        <meta
          property="og:description"
          content="Search real estate for sale, discover new homes, shop properties for sale, take virtual tours of houses, condos & apartments on rbbcrealty.com®."
        />
        <meta
          property="og:image"
          content="http://res.cloudinary.com/dsmxjpcpa/image/upload/v1600436993/rbbc-website_bbfom2.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RBBC Realty" />
        <meta
          name="twitter:description"
          content="Search real estate for sale, discover new homes, shop properties for sale, take virtual tours of houses, condos & apartments on rbbcrealty.com®."
        />
        <meta
          name="twitter:image"
          content="http://res.cloudinary.com/dsmxjpcpa/image/upload/v1600436993/rbbc-website_bbfom2.png"
        />
      </Head>
      <PageLayout>
        <CategoryBreadcrumbs propertyType={router.query.name} />
        <HomeListings
          listings={data.listingType.listings}
          className={'bg-white'}
          title={`All ${router.query.name} listings`}
        />
      </PageLayout>
    </>
  );
};

export default withApollo({ ssr: true })(PropertyType);
