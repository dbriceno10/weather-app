import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";

import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import { City } from "./utils/Interfaces";
import "./App.css";

const App = (): JSX.Element => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const getData = (resource: any) => {
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
    return city;
  };

  const onSearch = async (text: string) => {
    if (!text) {
      swal({
        title: "Información",
        text: "Debe escribir en el buscador",
        icon: "info",
        timer: 2000,
      });
    } else {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}?q=${text}&appid=${apiKey}&units=metric`
        );
        const resource = response.data;
        setLoading(false);
        const city: City = getData(resource);
        const index = cities?.findIndex((city) => city.id === resource.id);
        if (index !== -1) {
          const citiesCopy = [...cities];
          citiesCopy[index] = city;
          setCities(citiesCopy);
          localStorage.setItem("cities", JSON.stringify(citiesCopy));
        } else {
          if (cities.length >= 20) {
            const citiesCopy = [...cities];
            citiesCopy.pop();
            setCities([city, ...citiesCopy]);
            localStorage.setItem(
              "cities",
              JSON.stringify([city, ...citiesCopy])
            );
          } else {
            setCities((oldCities) => [city, ...oldCities]);
            localStorage.setItem("cities", JSON.stringify([city, ...cities]));
          }
        }
      } catch (error) {
        swal({
          title: "Error",
          text: "Ciudad no encontrada...",
          icon: "error",
          timer: 2000,
        }).then(() => setLoading(false));
      }
    }
  };

  const onClose = (id?: string | number): void => {
    swal({
      title: "Información",
      text: "¿Desea eliminar la tarjeta?",
      icon: "info",
      buttons: ["Cancelar", "Aceptar"],
    }).then((result) => {
      if (result) {
        const oldCities = cities?.filter((c: City) => c.id !== id);
        setCities(oldCities);
        localStorage.setItem("cities", JSON.stringify(oldCities));
      }
    });
  };

  const fetchDates = async (names: string[]) => {
    const array = names?.map((n) =>
      axios.get(`${baseUrl}?q=${n}&appid=${apiKey}&units=metric`)
    );
    try {
      setLoading(true);
      const response = await Promise.all(array);
      const arrayCityes = response?.map((r) => getData(r.data));
      setCities(arrayCityes);
      localStorage.setItem("cities", JSON.stringify(arrayCityes));
      setLoading(false);
    } catch (error) {
      swal({
        title: "Error",
        text: "Ha acorrido un error al actalizar las tarjetas...",
        icon: "error",
        timer: 2000,
      }).then(() => {
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    let citiesStorage: City[] = [];
    const storage = localStorage.getItem("cities");
    if (storage) {
      citiesStorage = JSON.parse(storage);
      setCities(citiesStorage);
      if (Array.isArray(citiesStorage) && citiesStorage.length > 0) {
        const names = citiesStorage?.map((c) => c.name);
        fetchDates(names);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Navbar onSearch={onSearch} loading={loading}>
        <Cards cities={cities} onClose={onClose} />
      </Navbar>
    </div>
  );
};

export default App;
