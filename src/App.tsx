import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { City } from "./utils/Interfaces";

function App() {
  const [cities, setCities] = useState<any>([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  function onSearch(ciudad: string) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        console.log(recurso);
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
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const searchId: City = cities.find(
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
  function onClose(id: number) {
    setCities((oldCities: City[]) => oldCities.filter((c: City) => c.id !== id));
  }
  return (
    <React.Fragment>
      <Navbar onSearch={onSearch}>
        <div className="App">
          <hr />
          <div>
            <Cards cities={cities} onClose={onClose} />
          </div>
          <hr />
        </div>
      </Navbar>
    </React.Fragment>
  );
}

export default App;
