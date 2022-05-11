import React from "react";
import { Typography } from "@mui/material";
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
        <Typography variant="h4" className={style.title_styles}>Weather App</Typography>
          <SearchBar onSearch={onSearch} />
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Navbar;
