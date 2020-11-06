import PropertyCard from '@components/property-post/property-card';

export default function HomeListings({ listings, className, title }) {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-3xl mb-8">{title}</h2>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {listings &&
            listings.map((item) => {
              return <PropertyCard item={item} key={item._id} />;
            })}
        </div>
      </div>
    </section>
  );
}
