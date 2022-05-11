import { useState } from "react";
import swal from "sweetalert";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { City } from "./utils/Interfaces";
import Loader from "./components/Loader/Loader";
import "./App.css";

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  function onSearch(ciudad: string) {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => {
        return r.json();
      })
      .then((recurso) => {
        if (recurso.main !== undefined) {
          setLoading(false);
          const ciudad: City = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp),
            name: recurso.name,
            weather: recurso.weather[0].main,
            weatherDesc: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
            pressure: recurso.main.pressure,
            humidity: recurso.main.humidity,
          };
          const searchId: City | undefined = cities.find(
            (city: City) => city.id === recurso.id
          );
          if (!searchId) {
            setCities((oldCities: City[]) => [...oldCities, ciudad]);
          }
        } else {
          swal("Error", "City not found", "error").then(() =>
            setLoading(false)
          );
        }
      })
      .catch((error) => {
        console.error(error.message);
        swal("Error", "An unexpected error has occurred", "error").then(() =>
          setLoading(false)
        );
      });
  }
  const onClose = (id?: string | number): void => {
    setCities((oldCities: City[]) =>
      oldCities.filter((c: City) => c.id !== id)
    );
  };
  return (
    <div className="container">
      <Navbar onSearch={onSearch}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "300px",
            }}
          >
            <Loader />
            <h3 style={{ marginTop: "10px" }}>Loading...</h3>
          </div>
        ) : (
          <Cards cities={cities} onClose={onClose} />
        )}
      </Navbar>
    </div>
  );
}

export default App;
