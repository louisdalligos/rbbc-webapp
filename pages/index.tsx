import Head from 'next/head';
import { request } from 'graphql-request';
import useSWR from 'swr';

import MainLayout from '@components/layouts/main-layout';
import HeroSearch from '@components/hero-search';
import HomeListings from '@components/home-listings';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
const listingsQuery = `query getListings{
  listings{
    _id
   	title
    slug
    startingPrice
    gallery {
      formats
    }
    listing_types {
      name
    }
  }
}`;

const Index = () => {
  const { data: listings, error } = useSWR(listingsQuery, (query) =>
    request(API_ENDPOINT, query),
  );

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
        {error && <p>There was an error processing your request</p>}
        <HomeListings listings={listings} />
      </MainLayout>
    </>
  );
};
export default Index;
