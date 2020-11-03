import Image from 'next/image';

export default function PropertyCard({ item }) {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 px-4 cursor-pointer">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg overflow-hidden">
        <img
          src={item.gallery[0].formats.large.url}
          alt={item.title}
          width={1000}
          height={467}
          className="object-cover"
        />
        <div className="px-4 py-5 flex-auto">
          <div className="flex items-baseline mb-3">
            <span className="inline-block text-green-500 text-xs uppercase font-semibold tracking-wide">
              {item.listing_types[0].name}
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              2 beds &bull; 3 baths &bull; 127 sqm
            </div>
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">
            {item.title}
          </h4>
          <p className="mt-2 mb-4 text-gray-600 text-sm">
            Starting price PHP {item.startingPrice}
          </p>
        </div>
      </div>
      <style jsx>{`
        .object-cover {
          min-height: 240px;
        }
      `}</style>
    </div>
  );
}
