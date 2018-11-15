import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Sefer, User} from '../_models/index';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {UtilService} from '../_utils/index';

@Injectable({
  providedIn: 'root'
})
export class SeferService {
  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getDialogData() {
    return this.dialogData;
  }

  getAllSefer() {
    return this.http.get<Sefer[]>(`${environment.apiUrl}/udhb/seferler`);
  }

  addSefer(sefer: Sefer) {
    this.http.post(`${environment.apiUrl}/udhb/seferEkle`, sefer).subscribe(data => {
        this.dialogData = sefer;
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  updateSefer(sefer: Sefer) {
    this.http.put(`${environment.apiUrl}/udhb/seferPlakaDegistir?id=` + sefer.id + '&uetdsSeferReferansNo='
      + sefer.uetdsSeferReferansNo + '&tasitPlakaNo=' + sefer.aracPlaka, null).subscribe(data => {
        this.dialogData = sefer;
        this.service.openSnackBar(data.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      }
    );
  }

  iptalSefer(sefer: Sefer) {
    this.http.post(`${environment.apiUrl}/udhb/seferIptal?id=` + sefer.id + '&uetdsSeferReferansNo='
      + sefer.uetdsSeferReferansNo + '&iptalAciklama=' + sefer.iptalAciklama, null).subscribe(data => {
        this.dialogData = sefer;
        this.service.openSnackBar(data.toString(), 'Delete');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Delete');
      }
    );
  }

  aktifSefer(sefer: Sefer) {
    this.http.post(`${environment.apiUrl}/udhb/seferAktif?id=` + sefer.id + '&uetdsSeferReferansNo='
      + sefer.uetdsSeferReferansNo + '&aktifAciklama=' + sefer.aktifAciklama, null).subscribe(data => {
        this.dialogData = sefer;
        this.service.openSnackBar(data.toString(), 'Active');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Active');
      }
    );
  }
}
