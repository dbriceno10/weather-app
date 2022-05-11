import React, { useState } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { City } from "./utils/Interfaces";
import "./App.css";

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  function onSearch(ciudad: string) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad: City = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            weatherDesc: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const searchId: City | undefined = cities.find(
            (city: City) => city.id === recurso.id
          );
          if (!searchId) {
            setCities((oldCities: City[]) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      })
      .catch((error) => console.error(error.message));
  }
  const onClose = (id?: string | number): void => {
    setCities((oldCities: City[]) =>
      oldCities.filter((c: City) => c.id !== id)
    );
  };
  return (
    <div className="container">
      <Navbar onSearch={onSearch}>
        <Cards cities={cities} onClose={onClose} />
      </Navbar>
    </div>
  );
}

export default App;
