import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models';
import {environment} from '../../environments/environment';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUser() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }


  register(user: User) {
    return this.http.post(`${environment.apiUrl}/api/auth/signup`, user);
  }

}
