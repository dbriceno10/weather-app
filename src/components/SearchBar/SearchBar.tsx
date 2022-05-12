import React, { useState } from "react";
import { Input, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }: { onSearch: (city: string) => void }): JSX.Element => {
  const [city, setCity] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(city);
    resetInput(e);
  };
  const resetInput = (e: any): void => {
    e.preventDefault();
    setCity("");
    e.target.reset();
  };
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className={style.container}>
        <Input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          className={style.search_styles}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
          disableUnderline={true}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={style.button_styles}
        >
          Search
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
