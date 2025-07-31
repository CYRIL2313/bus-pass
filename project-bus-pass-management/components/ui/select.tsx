import React from 'react';

export const Select = ({ onValueChange, children }) => {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <div className="relative">
      <select onChange={handleChange} className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500">
        {children}
      </select>
    </div>
  );
};

export const SelectTrigger = ({ className, children }) => {
  return (
    <div className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export const SelectContent = ({ children }) => {
  return (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
      {children}
    </div>
  );
};

export const SelectItem = ({ value, children }) => {
  return (
    <option value={value} className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">
      {children}
    </option>
  );
};