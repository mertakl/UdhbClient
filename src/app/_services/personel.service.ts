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

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllPersonel() {
    return this.http.get<Personel[]>(`${environment.apiUrl}/udhb/personeller`);
  }

  addPersonel(personel: Personel) {
    this.http.post(`${environment.apiUrl}/udhb/personelEkle`, personel).subscribe(data => {
        this.dialogData = personel;
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  updatePersonel(personel: Personel) {
    this.http.put(`${environment.apiUrl}/udhb/personelGuncelle`, personel).subscribe(result => {
        this.dialogData = personel;
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
    return this.http.get(`${environment.apiUrl}/udhb/personelIptal?` + id + '&iptalAciklama=' + aciklama);
  }
}
