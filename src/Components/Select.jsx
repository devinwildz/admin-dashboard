function Select({ label, options = [], id }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <select
        id={id}
        className="w-full rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option === 'Select' ? '' : option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
