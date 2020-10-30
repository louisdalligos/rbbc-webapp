import Image from 'next/image';

export default function PropertyCard() {
  return (
    <div className="w-full md:w-4/12 px-4 cursor-pointer">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg overflow-hidden">
        <Image
          src="/images/test.jpg"
          alt="Test"
          width={1024}
          height={768}
          className="object-cover"
        />
        <div className="px-4 py-5 flex-auto">
          <div className="flex items-baseline mb-3">
            <span className="inline-block text-green-500 text-xs uppercase font-semibold tracking-wide">Townhouse</span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              2 beds &bull; 3 baths &bull; 127 sqm
            </div>
          </div>
          <h4 className="font-semibold text-lg leading-tight truncate">Brizlane Townhouses -Visayas Avenue Quezon City – 4 Storey –</h4>
          <p className="mt-2 mb-4 text-gray-600 text-sm">Starting price PHP 1,300,000</p>
        </div>
      </div>
    </div>
  );
}
