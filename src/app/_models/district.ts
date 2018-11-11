import {City} from './city';

export interface District {
  id: number;
  districtCode: number;
  districtName: string;
  city: City;
}

