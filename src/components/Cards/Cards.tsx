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
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
            key={c.id}
            weather={c.weather}
            weatherDesc={c.weatherDesc}
          />
        ))}
      </div>
    );
  } else {
    return (
      <Container className={style.cardsContainer}>
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          Sin Búsquerdas
        </Typography>
      </Container>
    );
  }
};

export default Cards;
