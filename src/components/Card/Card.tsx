import React from "react";
import { City } from "../../utils/Interfaces";
import style from "./Card.module.css";

interface CityCardsProps extends City {
  onClose: () => void;
}

const Card: React.FC<CityCardsProps> = ({
  id,
  name,
  min,
  max,
  img,
  onClose,
}) => {
  return (
    <div key={id} className={style.cardContainer}>
      <button onClick={onClose}>X</button>
      <h4>{name}</h4>
      <div className={style.grid}>
        <div>
          <p>Min</p>
          <p>{min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max}</p>
        </div>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="sin imagen"
      />
    </div>
  );
};

export default Card;
