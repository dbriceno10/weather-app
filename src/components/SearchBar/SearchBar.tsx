import React, { useState } from "react";

const SearchBar = ({ onSearch }: any) => {
  const [city, setCity] = useState<any>("");
  const handleInputChange = (e: any) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  return (
    <React.Fragment>
      <form
        className="search-container"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(city);
        }}
      >
        <input
          type="text"
          placeholder="Ciudad..."
          onChange={(e) => handleInputChange(e)}
        />
        <input type="submit" value="Agregar" />
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
