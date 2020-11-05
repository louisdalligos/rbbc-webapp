import PropertyCard from '@components/property-post/property-card';

export default function HomeListings({ listings, className, title }) {
  return (
    <section className={`${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl mb-8">{title}</h2>
        <div className="grid grid-cols-3 gap-10">
          {listings &&
            listings.map((item) => {
              return <PropertyCard item={item} key={item._id} />;
            })}
        </div>
      </div>
    </section>
  );
}
