import React from "react";
import { City } from "../../utils/Interfaces";
import { Card, Box, CardContent, Typography, Avatar } from "@mui/material";
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

  const getBackground = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 7) {
      return style.backgroundDawn;
    } else if (hours >= 7 && hours < 11) {
      return style.backgroundMorning;
    } else if (hours >= 11 && hours < 17) {
      return style.backgroundNoon;
    } else if (hours >= 17 && hours < 19) {
      return style.backgroundSunset;
    } else if (hours >= 19 && hours <= 23) {
      return style.backgroundEvening;
    } else {
      return style.backgroundMidnigth;
    }
  };

  const getDataStyles = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 19) {
      return style.data_containerDark;
    } else {
      return style.data_containerLigth;
    }
  };

  return (
    <div key={id}>
      <Card className={getBackground()}>
        <CardContent className={style.cardContentHeader}>
          <Avatar
            src={`${flagsUrl}${country.toLowerCase()}.gif`}
            alt={country}
            title={country}
          />
          <DeleteIcon
            onClick={onClose}
            className={style.deleteIcon}
            sx={{ fontSize: "40px" }}
          />
        </CardContent>
        <CardContent className={getDataStyles()}>
          <p className={style.name}>{name}</p>
          <Typography variant="h6" noWrap>
            {country}
          </Typography>
          <img
            alt={weather}
            src={`${cloudsUrl}${img}@2x.png`}
            title={weather}
            className={style.weatherIcon}
          />
          <Typography variant="h6" className={style.capitalize_text} noWrap>
            {weatherDesc}
          </Typography>
          <Box>
            <div className={style.temperature}>
              <p className={style.numText}>{temp}</p>
              <p className={style.tempText}>°C</p>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
