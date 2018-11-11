import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UdhbKullanici} from '../_models';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UdhbKullaniciService {

  constructor(private http: HttpClient) {
  }

  getAllKullanici() {
    return this.http.get<UdhbKullanici[]>(`${environment.apiUrl}/udhb/udhbKullanici`);
  }

  updateUdhbKullanici(kullanici: UdhbKullanici) {
    return this.http.put<UdhbKullanici[]>(`${environment.apiUrl}/udhb/updateUdhbKullanici`, kullanici);
  }
}
