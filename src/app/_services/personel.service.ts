import {Injectable, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personel, User} from '../_models';
import {environment} from '../../environments/environment';
import {MatPaginator, MatSort} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  getAllPersonel() {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personeller`);
  }
}
