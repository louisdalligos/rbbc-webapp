import Image from 'next/image';

export default function ListingAuthor() {
  return (
    <div className="mt-8 pr-5 w-full flex justify-center">
      <Image
        src="/images/rachel-guevarra.jpg"
        alt="Rachel Guevarra"
        width={70}
        height={70}
        className="rounded-full h-full mr-4 object-cover shadow-lg"
      />
      <div className="ml-6">
        <h4 className="font-semibold mb-3">
          Rachel Guevarra,{' '}
          <span className="text-xs font-normal">LIC Broker</span>
        </h4>
        <a
          className="bg-gray-600 active:bg-blue-700 text-white py-1 px-3  text-sm  focus:outline-none rounded-full"
          href="tel:+639778340256"
        >
          How can I assist you?
        </a>
      </div>
    </div>
  );
}
