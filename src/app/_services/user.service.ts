import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from '../_models/index';
import {environment} from '../../environments/environment';
import {UtilService} from '../_utils/index';


@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private http: HttpClient, public service: UtilService) {
  }

  getAllUser() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  addUser(user: User) {
    this.http.post(`${environment.apiUrl}/api/auth/signup`, user).subscribe(data => {
        this.service.openSnackBar(data.toString(), 'Add');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Add');
      });
  }

  deleteUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/api/auth/user?userId=` + id).subscribe(data => {
        this.service.openSnackBar(data.toString(), 'Delete');
      },
      (err: HttpErrorResponse) => {
        this.service.openSnackBar(err.toString(), 'Delete');
      });
  }

}
