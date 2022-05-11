import { Container, Typography } from "@mui/material";
import { City } from "../../utils/Interfaces";
import Card from "../Card/Card";
import style from "./Cards.module.css";

interface CityCardsProps {
  onClose: (id: number | string | undefined) => void;
  cities: City[];
}

const Cards: React.FC<CityCardsProps> = ({ cities, onClose }) => {
  if (cities.length > 0) {
    return (
      <div className={style.cardsContainer}>
        {cities.map((c: City) => (
          <Card
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
            weather={c.weather}
            weatherDesc={c.weatherDesc}
            country={c.country}
            temp={c.temp}
          />
        ))}
      </div>
    );
  } else {
    return (
      <Container className={style.cardsContainer}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          No Searches
        </Typography>
      </Container>
    );
  }
};

export default Cards;
