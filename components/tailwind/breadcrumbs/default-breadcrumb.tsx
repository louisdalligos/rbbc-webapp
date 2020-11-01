import Link from 'next/link';

export default function Breadcrumbs() {
  const type = 'townhouse';
  const formatType = `${type[0].toUpperCase()}${type.slice(1)}`;
  const propertyTitle =
    'Don Antonio Heights – 3 Storey Townhouse for Sale in Quezon City';

  return (
    <nav className="w-full mb-4">
      <ol className="list-reset flex text-gray-800 text-sm">
        <li>
          <Link href="/">
            <a className="text-green-500">Home</a>
          </Link>
        </li>
        <li>
          <span className="mx-2">
            <i className="lni lni-chevron-right text-xs"></i>
          </span>
        </li>
        <li>
          <Link href={`/${type}`}>
            <a className="text-green-500">{formatType}</a>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-sm">
            <i className="lni lni-chevron-right text-xs"></i>
          </span>
        </li>
        <li>{propertyTitle}</li>
      </ol>
    </nav>
  );
}
