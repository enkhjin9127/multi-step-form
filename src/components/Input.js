const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
