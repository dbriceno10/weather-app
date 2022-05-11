import React from "react";
import { Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import WeatherSvg from "../svg/WeatherSvg";
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.logo_styles}>
            <WeatherSvg dimension={80} />
          </div>
          <Typography variant="h4" className={style.title_styles}>
            Weather App
          </Typography>
        </div>
        <SearchBar onSearch={onSearch} />
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Navbar;
