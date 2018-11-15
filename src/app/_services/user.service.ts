import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Sefer, User, Yolcu} from '../_models/index';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {UtilService} from '../_utils/index';


@Injectable({providedIn: 'root'})
export class UserService {

  dataChange: BehaviorSubject<Sefer[]> = new BehaviorSubject<Sefer[]>([]);
  dialogData: any;

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getAllUser() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  addUser(user: User) {
    this.http.post(`${environment.apiUrl}/api/auth/signup`, user).subscribe(data => {
        this.dialogData = user;
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  updateUser(user: User) {
    this.http.put(`${environment.apiUrl}/api/auth/updateUser`, user).subscribe(result => {
        this.dialogData = user;
        this.service.openSnackBar(result.toString(), 'Update');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Update');
      });
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/auth/deleteUser` + id);
  }

}
