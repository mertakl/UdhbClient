import {Injectable, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personel, Sefer, User} from '../_models';
import {environment} from '../../environments/environment';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient) {
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllPersonel() {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personeller`);
  }

  addPersonel(personel: Personel) {
    this.dialogData = personel;
    return this.http.post(`${environment.apiUrl}/udhb/personelEkle`, personel);
  }

  updatePersonel(personel: Personel) {
    this.dialogData = personel;
    return this.http.put(`${environment.apiUrl}/udhb/personelGuncelle`, personel);
  }

  deletePersonel(id: number) {
    return this.http.delete(`${environment.apiUrl}/udhb/personelSil` + id);
  }
}
