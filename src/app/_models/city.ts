import {Country} from './country';

export interface City {
  id: number;
  cityCode: number;
  cityName: string;
  country: Country;
}

