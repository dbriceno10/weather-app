import React from "react";
import { City } from "../../utils/Interfaces";
import {
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import style from "./Card.module.css";

interface CityCardsProps extends City {
  onClose: () => void;
}

const CardItem: React.FC<CityCardsProps> = ({
  id,
  name,
  img,
  weather,
  weatherDesc,
  country,
  temp,
  onClose,
}): JSX.Element => {
  const flagsUrl = process.env.REACT_APP_FLAGS_API;
  const cloudsUrl = process.env.REACT_APP_CLOUDS_API;
  if (country === undefined) country = "Ciudad no encontrada";
  return (
    <div key={id}>
      <Card sx={{ px: 1 }} className={style.background}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 0,
          }}
        >
          <Avatar
            src={`${flagsUrl}${country.toLowerCase()}.gif`}
            alt={country}
            title={country}
          />
          <Button onClick={onClose} variant="contained" color="error">
            <DeleteIcon />
          </Button>
        </CardContent>
        <CardContent className={style.data_container}>
          <Typography variant="h3" sx={{ fontWeight: "700" }} noWrap={false}>
            {name}
          </Typography>
          <Typography variant="h6" noWrap>
            {country}
          </Typography>
          <img
            alt={weather}
            src={`${cloudsUrl}${img}@2x.png`}
            title={weather}
          />
          <Typography variant="h6" className={style.capitalize_text} noWrap>
            {weatherDesc}
          </Typography>
          <Box sx={{ pt: 3 }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Typography variant="h4">{temp}</Typography>
              <Typography variant="h6">°C</Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
