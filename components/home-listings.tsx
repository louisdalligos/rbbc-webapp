import Link from 'next/link';
import PropertyCard from '@components/property-post/property-card';

export default function HomeListings({ listings }) {
  console.log(listings, 'listing');
  return (
    <section className="pb-20 bg-gray-200 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="mx-4 text-3xl mb-8">Featured listings</h2>
        <div className="flex flex-wrap">
          {listings &&
            listings.listings &&
            listings.listings.map((item) => {
              return <PropertyCard item={item} key={item._id} />;
            })}
        </div>
      </div>
    </section>
  );
}
