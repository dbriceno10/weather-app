import React, { useState } from "react";
import { Input, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";

import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  loading,
}): JSX.Element => {
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
          placeholder="Buscar..."
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
          className={style.button_styles}
          style={{ backgroundColor: loading ? "#e0e0e0" : "#1976d2" }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={30} /> : "Buscar"}
        </Button>
      </form>
    </React.Fragment>
  );
};

export default SearchBar;
