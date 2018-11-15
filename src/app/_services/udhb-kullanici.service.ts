import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Sefer, UdhbKullanici, Yolcu} from '../_models/index';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {UtilService} from '../_utils/index';

@Injectable({
  providedIn: 'root'
})
export class UdhbKullaniciService {

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getAllKullanici() {
    return this.http.get<UdhbKullanici[]>(`${environment.apiUrl}/udhb/udhbKullanici`);
  }

  updateUdhbKullanici(kullanici: UdhbKullanici) {
    this.http.put(`${environment.apiUrl}/udhb/updateUdhbKullanici`, kullanici).subscribe(result => {
        this.dialogData = kullanici;
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      });
  }

}
