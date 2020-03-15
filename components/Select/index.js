import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <select name="point" id="select" value={value} onChange={onChange}>
      {options.map(option => (
        <option value={option.name} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
