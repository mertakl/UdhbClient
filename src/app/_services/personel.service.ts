import {Injectable, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Personel, Sefer, User, Yolcu} from '../_models/index';
import {environment} from '../../environments/environment';
import {MatPaginator, MatSnackBar, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {UtilService} from '../_utils/index';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient, public service: UtilService) {
  }


  getAllPersonel() {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personeller`);
  }

  addPersonel(personel: Personel) {
    this.http.post(`${environment.apiUrl}/udhb/personelEkle`, personel).subscribe(data => {
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  addPersonelSefer(personelId: number, seferId: number) {
    this.http.get(`${environment.apiUrl}/udhb/personelSeferEkle?personelId=` + personelId + '&seferId=' + seferId).subscribe(data => {
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  updatePersonel(personel: Personel) {
    this.http.put(`${environment.apiUrl}/udhb/personelGuncelle`, personel).subscribe(result => {
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      });
  }

  deletePersonel(id: number) {
    return this.http.delete(`${environment.apiUrl}/udhb/personelSil?personelId=` + id).subscribe(result => {
        this.service.openSnackBar(result.toString(), 'Delete');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Delete');
      });
  }

  iptalPersonel(id: number, aciklama: string) {
    return this.http.get(`${environment.apiUrl}/udhb/personelIptal?personelId=` + id + '&iptalAciklama=' + aciklama).subscribe(result => {
        this.service.openSnackBar(result.toString(), 'Delete');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Delete');
      });
  }

  getAllPersonelWithSeferId(seferId: number) {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personelWithSeferId?seferId=` + seferId);
  }

  getAllPersonelWithoutSeferId(seferId: number) {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personelWithoutSeferId?seferId=` + seferId);
  }
}
