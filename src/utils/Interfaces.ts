export interface City {
  min?: number;
  max?: number;
  img: number;
  wind?: number;
  temp: number;
  name: string;
  weather: string;
  latitud?: number;
  longitud?: number;
  clouds?: number;
  id: number | string;
  weatherDesc: string;
  country: string;
  pressure?: number;
  humidity?: number;
}
