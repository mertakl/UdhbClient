import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Grup, Sefer, Yolcu} from '../_models';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class YolcuService {

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getAllYolcu() {
    return this.http.get<Yolcu[]>(`${environment.apiUrl}/udhb/yolcular`);
  }

  addYolcu(yolcu: Yolcu) {
    this.http.post(`${environment.apiUrl}/udhb/yolcuEkle`, yolcu).subscribe(data => {
        this.dialogData = yolcu;
        this.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.toString(), 'Add');
      });
  }

  updateYolcu(yolcu: Yolcu) {
    this.http.put(`${environment.apiUrl}/udhb/yolcu`, yolcu).subscribe(result => {
        this.dialogData = yolcu;
        this.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.toString(), 'Update');
      });
  }

  deleteYolcu(id: number) {
    return this.http.delete(`${environment.apiUrl}/udhb/yolcuSil` + id);
  }

  sendYolcuToUdhb(yolcuId: number, grupId: number) {
    this.http.get(`${environment.apiUrl}/udhb/yolcuGrupEkle?yolcuId=` + yolcuId + '&grupId=' + grupId).subscribe(result => {
        this.openSnackBar(result.toString(), 'Send');
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.toString(), 'Send');
      });
  }
}
