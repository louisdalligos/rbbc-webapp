import Head from 'next/head';
import { request } from 'graphql-request';
import useSWR from 'swr';

import MainLayout from '@components/layouts/main-layout';
import HeroSearch from '@components/hero-search';
import HomeListings from '@components/home-listings';

const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
const listingsQuery = `  query getListings{
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
