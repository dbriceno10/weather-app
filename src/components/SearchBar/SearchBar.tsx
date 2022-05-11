import React, { useState } from "react";
import { Input, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }: { onSearch: (ciudad: string) => void }) => {
  const [city, setCity] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(city);
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ciudad..."
          onChange={handleInputChange}
          className={style.search_styles}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          disableUnderline={true}
        />
        <Button type="submit" variant="contained" color="primary">
          Buscar
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
