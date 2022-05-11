// import {MouseEventHandler} from "react";
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
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.cardsContainer}>
        <h2>Sin ciudades</h2>
      </div>
    );
  }
};

export default Cards;
