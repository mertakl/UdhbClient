import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Grup, Sefer} from '../_models';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class GrupService {
  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public snackBar: MatSnackBar) {
  }

  getAllGrup() {
    return this.http.get<Grup[]>(`${environment.apiUrl}/udhb/gruplar`);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addGrup(grup: Grup) {
    this.http.post(`${environment.apiUrl}/udhb/seferGrupEkle`, grup).subscribe(result => {
        this.dialogData = grup;
        this.openSnackBar(result.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.toString(), 'Add');
      });
  }


  updateGrup(grup: Grup) {
    this.http.put(`${environment.apiUrl}/udhb/seferGrupGuncelle`, grup).subscribe(result => {
        this.dialogData = grup;
        this.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.openSnackBar(err.toString(), 'Update');
      });
  }

  deleteGrup(id: number) {
    return this.http.delete(`${environment.apiUrl}/udhb/grupSil` + id);
  }
}
