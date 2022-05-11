import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

const Navbar = ({
  onSearch,
  children,
}: {
  onSearch: (ciudad: string) => void;
  children: JSX.Element;
}) => {
  return (
    <React.Fragment>
      <nav className={style.container}>
      <SearchBar onSearch={onSearch} />
    </nav>
    {children}
    </React.Fragment>
  );
};

export default Navbar;
