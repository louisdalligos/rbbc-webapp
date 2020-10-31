import PropertyCard from './property-card';

export default function HomeListings() {
  return (
    <section className="pb-20 bg-gray-200 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="mx-4 text-3xl mb-8">Featured listings</h2>
        <div className="flex flex-wrap">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </section>
  );
}
