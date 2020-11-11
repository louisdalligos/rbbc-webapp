import DefaultBreadcrumbs from '@components/breadcrumbs/default-breadcrumb';
import Badge from '@components/badge/badge';
import Share from '@components/social/share';

export default function PropertyHeading({
  title,
  address,
  price,
  tags,
  propertyType,
}) {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="">
          <DefaultBreadcrumbs title={title} propertyType={propertyType} />
        </div>
        <div className="">
          <Share />
        </div>
      </div>

      <div className="flex flex-wrap items-baseline">
        <h2 className="text-2xl font-semibold mr-2">{title}</h2>
        {tags &&
          tags.length &&
          tags.map((item, x) => {
            return <Badge name={item.name} variant="success" key={x} />;
          })}
      </div>

      <div className="flex flex-wrap lg:items-baseline">
        <span className="text-sm mr-2">
          <i className="lni lni-map-marker"></i> {address}
        </span>
        <span className="text-sm">
          <i className="lni lni-money-location"></i> {price}
        </span>
      </div>
    </div>
  );
}
