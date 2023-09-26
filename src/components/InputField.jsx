import React from "react";

const InputField = ({
  label,
  onChangeHandler,
  type,
  value,
  placeholder,
  isRequired,
}) => {
  const handleChange = (e) => {
    onChangeHandler(e.target.value);
  };

  if (type === "submit") {
    return (
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        {label}
      </button>
    );
  }

  return (
    <div className="inputField mb-4">
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
          {label}:
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={isRequired}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default InputField;
