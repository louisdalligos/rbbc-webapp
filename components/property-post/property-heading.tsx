import DefaultBreadcrumbs from '@components/breadcrumbs/default-breadcrumb';
import Badge from '@components/badge/badge';
import Share from '@components/social/share';

export default function PropertyHeading() {
  return (
    <div className="px-4 lg:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        <div className="">
          <DefaultBreadcrumbs />
        </div>
        <div className="">
          <Share />
        </div>
      </div>

      <div className="flex flex-wrap lg:items-baseline">
        <h2 className="text-2xl font-semibold mr-2">
          Don Antonio Heights – 3 Storey Townhouse for Sale in Quezon City
        </h2>
        <Badge name="new" variant="warning" />
        <Badge name="featured" variant="danger" />
      </div>

      <span className="text-sm">
        <i className="lni lni-map-marker"></i> Novaliches, Quezon City
      </span>
    </div>
  );
}
