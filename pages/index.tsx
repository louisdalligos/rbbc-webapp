import Head from 'next/head';
import MainLayout from '@components/layouts/main-layout';
import HeroSearch from '@components/hero-search';
import HomeListings from '@components/home-listings';

const Index = () => {
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
        <HomeListings />
      </MainLayout>
    </>
  );
};
export default Index;
