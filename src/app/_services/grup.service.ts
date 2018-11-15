import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Grup, Sefer} from '../_models/index';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {UtilService} from '../_utils/util';

@Injectable({
  providedIn: 'root'
})
export class GrupService {
  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getAllGrup() {
    return this.http.get<Grup[]>(`${environment.apiUrl}/udhb/gruplar`);
  }


  addGrup(grup: Grup) {
    this.http.post(`${environment.apiUrl}/udhb/seferGrupEkle`, grup).subscribe(result => {
        this.dialogData = grup;
        this.service.openSnackBar(result.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }


  updateGrup(grup: Grup) {
    this.http.put(`${environment.apiUrl}/udhb/seferGrupGuncelle`, grup).subscribe(result => {
        this.dialogData = grup;
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      });
  }

}
