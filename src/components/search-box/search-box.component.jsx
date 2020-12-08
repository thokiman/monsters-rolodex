import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleChange, placeholder }) => {
  //pipeline2
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
