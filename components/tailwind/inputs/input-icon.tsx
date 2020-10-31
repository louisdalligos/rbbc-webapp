export default function InputIcon({
  name,
  value,
  placeholder,
  icon,
  type,
  onChange,
}) {
  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-2">
      <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-500 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2">
        <i className={`fas ${icon}`}></i>
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-2 py-2 placeholder-gray-600 border text-gray-700 relative bg-white bg-white text-sm outline-none focus:outline-none focus:border-green-400 w-full pl-10"
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
