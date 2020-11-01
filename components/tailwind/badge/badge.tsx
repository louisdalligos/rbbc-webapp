import classNames from 'classnames';

export default function Badge({ name, variant }) {
  const classes = classNames({
    'mr-1 text-xs px-2 rounded-full uppercase font-semibold tracking-wide bg-gray-200 text-gray-800': true,
    'bg-green-300 text-green-700': variant === 'success',
    'bg-red-300 text-red-700': variant === 'danger',
    'bg-yellow-300 text-yellow-700': variant === 'warning',
    'bg-blue-300 text-blue-700': variant === 'info',
  });

  return <span className={classes}>{name}</span>;
}
