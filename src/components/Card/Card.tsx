import React from "react";
import { City } from "../../utils/Interfaces";
import { capitalizeText } from "../../utils";
import style from "./Card.module.css";
import { Card, Box, CardContent, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

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
}) => {
  return (
    <div key={id}>
      <Card sx={{ px: 1 }} className={style.background}>
        <CardContent sx={{ display: "flex", justifyContent: "right" }}>
          <Button onClick={onClose} variant="contained" color="error">
            <DeleteIcon />
          </Button>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "#000",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "700" }} noWrap>
            {name}
          </Typography>
          <Typography variant="h6" noWrap>
            {country}
          </Typography>
          <img
            alt={weather}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            title={weather}
          />
          <Typography variant="h6" noWrap>
            {capitalizeText(weatherDesc as string)}
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
