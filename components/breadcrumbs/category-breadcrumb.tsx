import Link from 'next/link';

export default function CategoryBreadcrumbs({ propertyType }) {
  const formatType = `${propertyType[0].toUpperCase()}${propertyType.slice(1)}`;

  return (
    <nav className="container mx-auto mb-4">
      <ol className="list-reset flex text-gray-800 text-xs">
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
        <li>{formatType}</li>
      </ol>
    </nav>
  );
}
