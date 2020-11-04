import Head from 'next/head';
import { withApollo } from '@services/apollo';
import { useQuery } from '@apollo/react-hooks';
import { FEATURED_LISTINGS } from '@queries/featuredListingsQuery';

import MainLayout from '@components/layouts/main-layout';
import LoadingLayout from '@components/layouts/loading-layout';
import HeroSearch from '@components/hero-search';
import HomeListings from '@components/home-listings';

const Index = () => {
  const { loading, error, data } = useQuery(FEATURED_LISTINGS);
  if (error) return <p>There was an error processing your request</p>;
  if (loading) return <LoadingLayout />;

  return (
    <>
      <Head>
        <title>
          Home - RBBC Realty | Real state, Condominiums for sale, House for
          sale, RFO, Rent to own
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
      <MainLayout>
        <HeroSearch />
        <HomeListings listings={data.listings} />
      </MainLayout>
    </>
  );
};

export default withApollo({ ssr: true })(Index);
