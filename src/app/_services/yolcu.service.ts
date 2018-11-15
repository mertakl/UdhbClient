import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Sefer, Yolcu} from '../_models/index';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {UtilService} from '../_utils/index';

@Injectable({
  providedIn: 'root'
})
export class YolcuService {

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getAllYolcu() {
    return this.http.get<Yolcu[]>(`${environment.apiUrl}/udhb/yolcular`);
  }

  getAllYolcuWithoutGrupId() {
    return this.http.get<Yolcu[]>(`${environment.apiUrl}/udhb/getAllYolcuWithoutGrupId`);
  }

  getAllYolcuWithGrupId(id: number) {
    return this.http.get<Yolcu[]>(`${environment.apiUrl}/udhb/getYolcuWithGrupId?grupId=` + id);
  }

  addYolcu(yolcu: Yolcu) {
    this.http.post(`${environment.apiUrl}/udhb/yolcuEkle`, yolcu).subscribe(data => {
        this.dialogData = yolcu;
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  updateYolcu(yolcu: Yolcu) {
    this.http.put(`${environment.apiUrl}/udhb/yolcu`, yolcu).subscribe(result => {
        this.dialogData = yolcu;
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      });
  }

  deleteYolcu(id: number) {
    return this.http.delete(`${environment.apiUrl}/udhb/yolcuSil?yolcuId=` + id).subscribe(result => {
        this.service.openSnackBar('Başarıyla silindi!', 'Delete');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar('Hata meydana geldi!', 'Delete');
      });
  }

  iptalYolcu(id: number, aciklama: string) {
    return this.http.get(`${environment.apiUrl}/udhb/yolcuIptal?id=` + id + '&iptalAciklama=' + aciklama).subscribe(result => {
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Delete');
      });
  }

  addYolcuGrup(grupId: number, yolcuId: number) {
    this.http.get(`${environment.apiUrl}/udhb/yolcuGrupEkle?yolcuId=` + yolcuId + '&grupId=' + grupId).subscribe(data => {
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }
}
