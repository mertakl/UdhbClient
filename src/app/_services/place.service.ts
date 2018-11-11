import {Injectable} from '@angular/core';
import {City, Country, District, Personel} from '../_models';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) {
  }

  getAllCountries() {
    return this.http.get<Country[]>(`${environment.apiUrl}/place/countries`);
  }

  getAllCities(id: any) {
    return this.http.get<City[]>(`${environment.apiUrl}/place/cities/` + id);
  }

  getAlDistricts(id: any) {
    return this.http.get<District[]>(`${environment.apiUrl}/place/districts/` + id);
  }
}
