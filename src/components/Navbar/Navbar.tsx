import React from "react";
import { Typography } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import WeatherSvg from "../svg/WeatherSvg";
import style from "./Navbar.module.css";

interface NavbarProps {
  onSearch: (city: string) => void;
  loading: boolean;
  children: JSX.Element;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, loading, children }) => {
  return (
    <React.Fragment>
      <nav className={style.container}>
        <div className={style.container_title}>
          <div className={style.logo_styles}>
            <WeatherSvg dimension={80} />
          </div>
          <Typography variant="h4" className={style.title_styles}>
            Weather App
          </Typography>
        </div>
        <SearchBar onSearch={onSearch} loading={loading} />
      </nav>
      {children}
    </React.Fragment>
  );
};

export default Navbar;
