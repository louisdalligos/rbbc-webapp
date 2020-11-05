import Link from 'next/link';

export default function Breadcrumbs({ title, propertyType }) {
  const type = propertyType[0].name;
  const id = propertyType[0].id;
  const formatType = `${type[0].toUpperCase()}${type.slice(1)}`;

  return (
    <nav className="w-full">
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
          <Link
            href={{
              pathname: `/type/${type}`,
              query: { ref_key: `${id}` },
            }}
          >
            <a className="text-green-500">{formatType}</a>
          </Link>
        </li>
        <li>
          <span className="mx-2 text-sm">
            <i className="lni lni-chevron-right text-xs"></i>
          </span>
        </li>
        <li>{title}</li>
      </ol>
    </nav>
  );
}
