import DefaultBreadcrumbs from '@components/tailwind/breadcrumbs/default-breadcrumb';
import Badge from '@components/tailwind/badge/badge';

export default function PropertyHeading() {
  return (
    <div className="px-4 lg:px-0">
      <DefaultBreadcrumbs />

      <div className="flex flex-wrap lg:items-baseline">
        <h2 className="text-2xl font-semibold">
          Don Antonio Heights – 3 Storey Townhouse for Sale in Quezon City
        </h2>
        <Badge name="new" variant="warning" />
        <Badge name="featured" variant="danger" />
      </div>

      <span className="text-sm"><i className="lni lni-map-marker"></i> Novaliches, Quezon City</span>
    </div>
  );
}
