import { useState } from "react";
import swal from "sweetalert";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { City } from "./utils/Interfaces";
import Loader from "./components/Loader/Loader";
import "./App.css";

const App = (): JSX.Element => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  function onSearch(city: string) {
    setLoading(true);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => {
        return r.json();
      })
      .then((resource) => {
        if (resource.main !== undefined) {
          setLoading(false);
          const city: City = {
            min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: Math.round(resource.main.temp),
            name: resource.name,
            weather: resource.weather[0].main,
            weatherDesc: resource.weather[0].description,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon,
            country: resource.sys.country,
            pressure: resource.main.pressure,
            humidity: resource.main.humidity,
          };
          const searchId: City | undefined = cities.find(
            (city: City) => city.id === resource.id
          );
          if (!searchId) {
            setCities((oldCities: City[]) => [...oldCities, city]);
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
};

export default App;
