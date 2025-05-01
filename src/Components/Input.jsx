function Input({ label, placeholder, type = 'text', id }) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md bg-transparent text-black dark:text-white dark:bg-[#2c3550] border border-gray-500 text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
      />
    </div>
  );
}
export default Input;
