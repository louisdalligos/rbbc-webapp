import DefaultBreadcrumbs from '@components/tailwind/breadcrumbs/default-breadcrumb';
import Badge from '@components/tailwind/badge/badge';

export default function PropertyHeading() {
  return (
    <div className="px-4 lg:px-0">
      <DefaultBreadcrumbs />

      <div className="flex flex-wrap mb-8 lg:items-baseline lg:mb-0">
        <h2 className="text-2xl font-semibold my-4">
          Don Antonio Heights – 3 Storey Townhouse for Sale in Quezon City
        </h2>
        <Badge name="new" variant="warning" />
        <Badge name="featured" variant="danger" />
      </div>
    </div>
  );
}
