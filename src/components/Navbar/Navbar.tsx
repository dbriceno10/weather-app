import React from "react";
import SearchBar from "../SearchBar/SearchBar"
const Navbar = ({onSearch, children}: any) => {
  return (
    <nav>
      <SearchBar onSearch={onSearch}/>
      {children}
    </nav>
  );
}

export default Navbar;
